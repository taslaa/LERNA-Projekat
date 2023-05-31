using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IVehicleBrandsService : IBaseService<int, VehicleBrandDto, VehicleBrandUpsertDto, VehicleBrandSearchObject>
    {
    }
}