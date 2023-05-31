using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class UserRideCommentsRepository : BaseRepository<UserRideComment, int, BaseSearchObject>, IUserRideCommentsRepository
    {
        public UserRideCommentsRepository(DatabaseContext databaseContext) : base(databaseContext)
        {

        }
    }
}
