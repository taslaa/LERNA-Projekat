
using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class TravelPreferenceProfile : BaseProfile
    {
        public TravelPreferenceProfile()
        {
            CreateMap<TravelPreferenceDto, TravelPreference>().ReverseMap();
            CreateMap<TravelPreference, TravelPreferenceDto>().ReverseMap();

            CreateMap<TravelPreferenceWithOptionsUpsertDto, TravelPreference>();
        }
    }
}
