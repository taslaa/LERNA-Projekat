using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface ITravelPreferenceService : IBaseService<int,TravelPreferenceDto,TravelPreferenceWithOptionsUpsertDto, TravelPreferenceSearchObject>
    {
    }
}
