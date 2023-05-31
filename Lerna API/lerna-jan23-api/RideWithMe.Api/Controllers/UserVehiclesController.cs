using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class UserVehiclesController : BaseCrudController<UserVehicleDto, UserVehicleUpsertDto, UserVehicleSearchObject, IUserVehiclesService>
    {
        public UserVehiclesController(IUserVehiclesService service, ILogger<UserVehiclesController> logger) : base(service, logger)
        {
        }
    }
}
