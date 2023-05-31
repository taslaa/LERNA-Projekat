using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class ConditionsController : BaseCrudController<ConditionDto, ConditionUpsertDto, ConditionSearchObject, IConditionsService>
    {
        public ConditionsController(IConditionsService service, ILogger<ConditionsController> logger) : base(service, logger)
        {
        }
    }
}