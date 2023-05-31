using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class UserTravelPreferenceOptionRepository : BaseRepository<UserTravelPreferenceOption, int, BaseSearchObject>,IUserTravelPreferenceOptionRepository
    {
        public UserTravelPreferenceOptionRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }
    }
}
