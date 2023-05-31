using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IUserRideCommentsService : IBaseService<int, UserRideCommentDto, UserRideCommentUpsertDto, BaseSearchObject>
    {
    }
}
