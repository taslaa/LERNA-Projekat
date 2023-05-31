using Microsoft.EntityFrameworkCore;

using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class VehicleBrandsRepository : BaseRepository<VehicleBrand, int, VehicleBrandSearchObject>, IVehicleBrandsRepository
    {
        public VehicleBrandsRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public override Task<PagedList<VehicleBrand>> GetPagedAsync(VehicleBrandSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return DbSet
                .Where(vb => searchObject.Name == null || vb.Name.ToLower().Contains(searchObject.Name.ToLower()))
                .ToPagedListAsync(searchObject, cancellationToken);
        }

        public Task<bool> DoesExistAsync(string name, int? excludeId, CancellationToken cancellationToken = default)
        {
            return DbSet.AnyAsync(vb => (excludeId == null || vb.Id != excludeId) && vb.Name == name, cancellationToken);
        }
    }
}
