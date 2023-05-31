using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface ITravelPreferenceOptionService : IBaseService<int,TravelPreferenceOptionDto,TravelPreferenceOptionUpsertDto,BaseSearchObject>
    {
    }
}
