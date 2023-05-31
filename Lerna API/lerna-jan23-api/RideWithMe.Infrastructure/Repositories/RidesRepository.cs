using Microsoft.EntityFrameworkCore;

using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;
using System.Security.Cryptography;

namespace RideWithMe.Infrastructure
{
    public class RidesRepository : BaseRepository<Ride, int, RideSearchObject>, IRidesRepository
    {
        public RidesRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public async override Task<PagedList<Ride>> GetPagedAsync(RideSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            var ridesByLocationQuery = DbSet
               .Include(r => r.Milestones).ThenInclude(ms => ms.City).ThenInclude(c => c.Country)
               .Include(r => r.DriverVehicle).ThenInclude(r => r.VehicleModel)
               .Where(r => r.Milestones.Any(ms => ms.CityId == searchObject.CityFromId)
                        && r.Milestones.Any(ms => ms.CityId == searchObject.CityToId)
                        && (searchObject.PassengersCount == null || r.MaxPassengersCount >= searchObject.PassengersCount)
                        && (searchObject.StartDate == null || r.StartDateTime > searchObject.StartDate.Value
                        && r.StartDateTime < searchObject.StartDate.Value.AddDays(1).AddMilliseconds(-1))
                        && (searchObject.ConditionsIds == null || r.Conditions.Count(c => searchObject.ConditionsIds.Contains(c.ConditionId)) == searchObject.ConditionsIds.Count)
                        && (searchObject.DepartureTime == null || (r.StartDateTime.Hour >= searchObject.DepartureTime.FromHour && r.StartDateTime.Hour <= searchObject.DepartureTime.ToHour))
                        )
               .Select(r => new Ride
               {
                   Id = r.Id,
                   DriverId = r.DriverId,
                   Driver = r.Driver,
                   DriverVehicle = r.DriverVehicle,
                   DriverVehicleId = r.DriverVehicleId,
                   Conditions = r.Conditions,
                   CommunicationType = r.CommunicationType,
                   MaxPassengersCount = r.MaxPassengersCount,
                   Milestones = new List<RideMilestone>
                   {
                       r.Milestones.First(ms => ms.CityId == searchObject.CityFromId),
                       r.Milestones.First(ms => ms.CityId == searchObject.CityToId),
                   },
                   Price = r.Milestones.First(ms => ms.CityId == searchObject.CityToId).Price - r.Milestones.First(ms => ms.CityId == searchObject.CityFromId).Price,
                   StartDateTime = r.StartDateTime,
                   EndDateTime = r.EndDateTime,
                   Notes = r.Notes,
                   Passengers = r.Passengers
               })
               .AsQueryable();

            if (searchObject.ListingOrder == ListingOrderEnum.LowestPrice)
            {
                ridesByLocationQuery = ridesByLocationQuery.OrderBy(r => r.Price);
            }
            else if (searchObject.ListingOrder == ListingOrderEnum.EarliestDepartureTime)
            {
                ridesByLocationQuery = ridesByLocationQuery.OrderByDescending(r => r.StartDateTime);
            }

            var ridesByLocation = await ridesByLocationQuery.ToPagedListAsync(searchObject, cancellationToken);

            ridesByLocation.Items = ridesByLocation.Items.Where(r => r.Milestones.First().Order < r.Milestones.Last().Order).ToList();
            return ridesByLocation;
        }

        public async override Task<Ride?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
        {
            return await DbSet.Include(r => r.Milestones).FirstOrDefaultAsync(r => r.Id == id, cancellationToken);
        }

        public async Task<int> GetCountAsync(DateTime endDate, CancellationToken cancellationToken = default)
        {
            return await DbSet.Where(r => r.EndDateTime > DateTime.Now).CountAsync(cancellationToken);
        }

    }
}
