using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RideProfile : BaseProfile
    {
        public RideProfile()
        {
            CreateMap<RideDto, Ride>().ForMember(r => r.Milestones, o => o.MapFrom(r => r.Milestones.ToList())).ReverseMap();

            CreateMap<FilterDto, Ride>().ReverseMap();

            CreateMap<RideUpsertDto, Ride>();
        }
    }
}
