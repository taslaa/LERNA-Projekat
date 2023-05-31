using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class TravelPreferenceOptionController : BaseCrudController<TravelPreferenceOptionDto, TravelPreferenceOptionUpsertDto, BaseSearchObject, ITravelPreferenceOptionService>
    {
        public TravelPreferenceOptionController(ITravelPreferenceOptionService service, ILogger<BaseController> logger) : base(service, logger)
        {
        }
    }
}
