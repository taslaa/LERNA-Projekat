using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class RideMilestonesController : BaseCrudController<RideMilestoneDto, RideMilestoneUpsertDto, BaseSearchObject, IRideMilestonesService>
    {
        public RideMilestonesController(IRideMilestonesService service, ILogger<RideMilestonesController> logger) : base(service, logger)
        {
        }
    }
}