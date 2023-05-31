using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class RideConditionsRepository : BaseRepository<RideCondition, int, BaseSearchObject>, IRideConditionsRepository
    {
        public RideConditionsRepository(DatabaseContext databaseContext) : base(databaseContext)
        {

        }
    }
}
