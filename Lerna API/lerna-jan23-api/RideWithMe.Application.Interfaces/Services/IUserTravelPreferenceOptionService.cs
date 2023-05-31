using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IUserTravelPreferenceOptionService : IBaseService<int,UserTravelPreferenceOptionDto,UserTravelPreferenceOptionUpsertDto,BaseSearchObject>
    {
    }
}
