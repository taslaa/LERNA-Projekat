using Microsoft.EntityFrameworkCore;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class UserVehiclesRepository : BaseRepository<UserVehicle, int, UserVehicleSearchObject>, IUserVehiclesRepository
    {
        public UserVehiclesRepository(DatabaseContext databaseContext) : base(databaseContext)
        {

        }

        public override async Task<PagedList<UserVehicle>> GetPagedAsync(UserVehicleSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return await DbSet
           .Include(v => v.VehicleModel)
           .Where(u => u.UserId == searchObject.UserId)
           .ToPagedListAsync(searchObject, cancellationToken);
        }
    }
}
