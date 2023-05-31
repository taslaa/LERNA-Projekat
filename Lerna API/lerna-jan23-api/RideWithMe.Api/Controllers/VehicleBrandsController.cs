using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class VehicleBrandsController : BaseCrudController<VehicleBrandDto, VehicleBrandUpsertDto, VehicleBrandSearchObject, IVehicleBrandsService>
    {
        public VehicleBrandsController(IVehicleBrandsService service, ILogger<VehicleBrandsController> logger) : base(service, logger)
        {
        }
    }
}
