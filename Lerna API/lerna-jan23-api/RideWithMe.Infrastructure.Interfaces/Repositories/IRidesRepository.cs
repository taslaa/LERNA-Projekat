using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IRidesRepository : IBaseRepository<Ride, int, RideSearchObject>
    {
        Task<int> GetCountAsync(DateTime endDate, CancellationToken cancellationToken = default);
    }
}
