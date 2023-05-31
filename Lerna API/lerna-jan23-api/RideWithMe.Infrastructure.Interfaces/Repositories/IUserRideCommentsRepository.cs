using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IUserRideCommentsRepository : IBaseRepository<UserRideComment, int, BaseSearchObject>
    {
    }
}
