using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class VehicleModelsRepository : BaseRepository<VehicleModel, int, VehicleModelSearchObject>, IVehicleModelsRepository
    {
        public VehicleModelsRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public override Task<PagedList<VehicleModel>> GetPagedAsync(VehicleModelSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return DbSet
                .Where(vb => searchObject.VehicleBrandId == null || vb.VehicleBrandId == searchObject.VehicleBrandId)
                .ToPagedListAsync(searchObject, cancellationToken);
        }
    }
}
