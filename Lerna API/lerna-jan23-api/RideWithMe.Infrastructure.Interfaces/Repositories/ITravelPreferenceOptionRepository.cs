using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public interface ITravelPreferenceOptionRepository : IBaseRepository<TravelPreferenceOption,int,BaseSearchObject>
    {
    }
}
