using Microsoft.EntityFrameworkCore;

using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class TravelPreferenceRepository : BaseRepository<TravelPreference, int, TravelPreferenceSearchObject>, ITravelPreferenceRepository
    {
        protected readonly DbSet<TravelPreferenceOption> DbSetOption;
        public TravelPreferenceRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
            DbSetOption = DatabaseContext.Set<TravelPreferenceOption>();
        }

        public override Task<PagedList<TravelPreference>> GetPagedAsync(TravelPreferenceSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return DbSet
              .Where(tp => searchObject.Name == null || tp.Name.ToLower().Contains(searchObject.Name.ToLower()))
              .Include(x => x.TravelPreferenceOptions)
              .ToPagedListAsync(searchObject, cancellationToken);
        }

        public override async Task<TravelPreference?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
        {
            return await DbSet
                .Include(tp => tp.TravelPreferenceOptions)
                .FirstOrDefaultAsync(tp => tp.Id == id, cancellationToken);
        }

        public override async Task AddAsync(TravelPreference entity, CancellationToken cancellationToken = default)
        {
            entity.Id = default;

            foreach (var item in entity.TravelPreferenceOptions)
            {
                item.Id = default;
                item.TravelPreferenceId = entity.Id;
            }

            await DbSet.AddAsync(entity, cancellationToken);
            await DbSetOption.AddRangeAsync(entity.TravelPreferenceOptions, cancellationToken);
        }

        public override void Update(TravelPreference entity)
        {
            var existingOptions = DbSetOption.Where(x => x.TravelPreferenceId == entity.Id).AsNoTracking().ToList();
            var newOptions = entity.TravelPreferenceOptions;

            foreach (var ep in existingOptions)
            {
                var removeOption = true;

                foreach (var np in newOptions)
                {
                    if (ep.Id == np.Id)
                        removeOption = false;
                }

                if (removeOption)
                {
                    DbSetOption.Remove(ep);
                }
            }

            base.Update(entity);
        }
        public Task<bool> DoesExistAsync(string name, int? excludeId, CancellationToken cancellationToken = default)
        {
            return DbSet.AnyAsync(vb => (excludeId == null || vb.Id != excludeId) && vb.Name == name, cancellationToken);
        }
    }
}
