using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IRecentSearchService : IBaseService<int,RecentSearchDto,RecentSearchUpsertDto,RecentSearchObject>
    {
        Task DeleteAll();
    }
}
