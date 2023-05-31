using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IConditionsService : IBaseService<int, ConditionDto, ConditionUpsertDto, ConditionSearchObject>
    {
        Task<IEnumerable<ConditionDto>> GetAll(CancellationToken cancellationToken = default);
    }
}
