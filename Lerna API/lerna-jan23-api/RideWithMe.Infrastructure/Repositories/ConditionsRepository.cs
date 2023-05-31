using Microsoft.EntityFrameworkCore;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class ConditionsRepository : BaseRepository<Condition, int, ConditionSearchObject>, IConditionsRepository
    {
        public ConditionsRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public async Task<IEnumerable<Condition>> GetAll(CancellationToken cancellationToken = default)
        {
            return await DbSet.AsNoTracking().Where(c => c.IsDeleted == false).ToListAsync(cancellationToken);
        }

        public Task<bool> DoesExistAsync(string name, int? excludeId, CancellationToken cancellationToken = default)
        {
            return DbSet.AnyAsync(vb => (excludeId == null || vb.Id != excludeId) && vb.Name == name, cancellationToken);
        }


        public override Task<PagedList<Condition>> GetPagedAsync(ConditionSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return DbSet
                .Where(vb => searchObject.Name == null || vb.Name.ToLower().Contains(searchObject.Name.ToLower()))
                .ToPagedListAsync(searchObject, cancellationToken);
        }
    }
}
