using Microsoft.EntityFrameworkCore;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class UserRidesRepository : BaseRepository<UserRide, int, BaseSearchObject>, IUserRidesRepository
    {
        public UserRidesRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public async Task<decimal> GetTotalIncomeAsync(CancellationToken cancellationToken = default)
        {
            return await DbSet.SumAsync(ur => ur.Price, cancellationToken);
        }
    }
}
