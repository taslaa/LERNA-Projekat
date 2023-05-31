using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public interface ITravelPreferenceRepository : IBaseRepository<TravelPreference,int,TravelPreferenceSearchObject>
    {
        Task<bool> DoesExistAsync(string name, int? id, CancellationToken cancellationToken = default);

    }
}
