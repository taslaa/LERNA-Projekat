using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IRideConditionsService : IBaseService<int, RideConditionDto, RideConditionUpsertDto, BaseSearchObject>
    { 
    }
}
