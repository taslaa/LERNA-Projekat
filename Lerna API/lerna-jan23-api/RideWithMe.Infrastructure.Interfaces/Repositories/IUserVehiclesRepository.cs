using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IUserVehiclesRepository : IBaseRepository<UserVehicle, int, UserVehicleSearchObject>
    {
    }
}
