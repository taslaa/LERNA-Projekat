using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class UserRideCommentsController : BaseCrudController<UserRideCommentDto, UserRideCommentUpsertDto, BaseSearchObject, IUserRideCommentsService>
    {
        public UserRideCommentsController(IUserRideCommentsService service, ILogger<UserRideCommentsController> logger) : base(service, logger)
        {
        }
    }
}
