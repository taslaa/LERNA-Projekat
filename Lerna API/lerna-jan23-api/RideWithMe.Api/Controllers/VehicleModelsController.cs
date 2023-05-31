using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class VehicleModelsController : BaseCrudController<VehicleModelDto, VehicleModelUpsertDto, VehicleModelSearchObject, IVehicleModelsService>
    {
        public VehicleModelsController(IVehicleModelsService service, ILogger<VehicleModelsController> logger) : base(service, logger)
        {
        }
    }
}
