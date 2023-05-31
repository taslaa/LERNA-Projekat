using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class TravelPreferenceOptionProfile : BaseProfile
    {
        public TravelPreferenceOptionProfile()
        {
            CreateMap<TravelPreferenceOptionDto, TravelPreferenceOption>().ReverseMap();
            CreateMap<TravelPreferenceOption, TravelPreferenceOptionDto>().ReverseMap();

            CreateMap<TravelPreferenceOptionUpsertDto, TravelPreferenceOption>();
        }
    }
}
