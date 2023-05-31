using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IVehicleModelsRepository : IBaseRepository<VehicleModel, int, VehicleModelSearchObject>
    {
    }
}