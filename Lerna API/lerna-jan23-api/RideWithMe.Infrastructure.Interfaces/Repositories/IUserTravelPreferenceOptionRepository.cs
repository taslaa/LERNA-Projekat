using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public interface IUserTravelPreferenceOptionRepository : IBaseRepository<UserTravelPreferenceOption,int,BaseSearchObject>
    {
    }
}
