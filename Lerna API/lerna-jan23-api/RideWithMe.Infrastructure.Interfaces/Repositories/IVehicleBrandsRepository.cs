using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IVehicleBrandsRepository : IBaseRepository<VehicleBrand, int, VehicleBrandSearchObject>
    {
        Task<bool> DoesExistAsync(string name, int? id, CancellationToken cancellationToken = default);
    }
}