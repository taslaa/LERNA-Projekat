using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IRecentSearchRepository : IBaseRepository<RecentSearch,int,RecentSearchObject>
    {
        Task DeleteByUserIdAsync(int userId);
    }
}
