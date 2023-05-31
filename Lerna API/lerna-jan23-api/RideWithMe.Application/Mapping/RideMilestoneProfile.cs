using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RideMilestoneProfile : BaseProfile
    {
        public RideMilestoneProfile()
        {
            CreateMap<RideMilestoneDto, RideMilestone>().ReverseMap();

            CreateMap<RideMilestoneUpsertDto, RideMilestone>();
        }
    }
}
