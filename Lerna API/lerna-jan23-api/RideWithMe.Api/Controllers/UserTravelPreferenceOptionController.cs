using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class UserTravelPreferenceOptionController : BaseCrudController<UserTravelPreferenceOptionDto, UserTravelPreferenceOptionUpsertDto, BaseSearchObject, IUserTravelPreferenceOptionService>
    {
        public UserTravelPreferenceOptionController(IUserTravelPreferenceOptionService service, ILogger<BaseController> logger) : base(service, logger)
        {
        }
    }
}
