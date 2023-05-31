using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class RideMilestonesRepository : BaseRepository<RideMilestone, int, BaseSearchObject>, IRideMilestonesRepository
    {
        public RideMilestonesRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

     
    }
}
