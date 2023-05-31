using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class TravelPreferenceOptionRepository : BaseRepository<TravelPreferenceOption, int, BaseSearchObject>,ITravelPreferenceOptionRepository
    {
        public TravelPreferenceOptionRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }
    }
}
