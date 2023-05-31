using Microsoft.AspNetCore.Mvc;
using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class TravelPreferenceController : BaseCrudController<TravelPreferenceDto, TravelPreferenceWithOptionsUpsertDto, TravelPreferenceSearchObject, ITravelPreferenceService>
    {
        public TravelPreferenceController(ITravelPreferenceService service, ILogger<BaseController> logger) : base(service, logger)
        {
        }

        public override Task<IActionResult> Post([FromBody] TravelPreferenceWithOptionsUpsertDto upsertDto, CancellationToken cancellationToken = default)
        {
            return base.Post(upsertDto, cancellationToken);
        }
    }
}
