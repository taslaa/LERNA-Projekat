using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IConditionsRepository : IBaseRepository<Condition, int, ConditionSearchObject>
    {
        public Task<IEnumerable<Condition>> GetAll(CancellationToken cancellationToken = default);
        Task<bool> DoesExistAsync(string name, int? excludeId, CancellationToken cancellationToken = default);
    }
}
