using Microsoft.EntityFrameworkCore;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class RecentSearchRepository : BaseRepository<RecentSearch, int, RecentSearchObject>, IRecentSearchRepository
    {
        public RecentSearchRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public async Task DeleteByUserIdAsync(int userId)
        {
            var users = await DbSet.Where(x => x.UserId == userId).ToListAsync();

            foreach (var user in users)
            {
                user.IsDeleted = true;
            }
        }

        public override Task<PagedList<RecentSearch>> GetPagedAsync(RecentSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return DbSet
            .Where(r => r.UserId == searchObject.UserId)
            .ToPagedListAsync(searchObject, cancellationToken);
        }
    }
}
