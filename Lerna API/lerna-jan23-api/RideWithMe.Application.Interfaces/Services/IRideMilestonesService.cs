using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IRideMilestonesService : IBaseService<int, RideMilestoneDto, RideMilestoneUpsertDto, BaseSearchObject>
    {
    }
}
