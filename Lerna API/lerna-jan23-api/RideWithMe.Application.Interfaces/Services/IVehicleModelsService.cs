using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IVehicleModelsService : IBaseService<int, VehicleModelDto, VehicleModelUpsertDto, VehicleModelSearchObject>
    {
    }
}