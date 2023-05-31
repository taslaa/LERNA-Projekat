using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IUserRidesRepository : IBaseRepository<UserRide, int, BaseSearchObject>
    {
        Task<decimal> GetTotalIncomeAsync(CancellationToken cancellationToken = default);

    }
}
