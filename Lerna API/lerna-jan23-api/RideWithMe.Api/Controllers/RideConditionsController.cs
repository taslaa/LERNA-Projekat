using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class RideConditionsController : BaseCrudController<RideConditionDto, RideConditionUpsertDto, BaseSearchObject, IRideConditionsService>
    {
        public RideConditionsController(IRideConditionsService service, ILogger<RideConditionsController> logger) : base(service, logger)
        {
        }
    }
}
