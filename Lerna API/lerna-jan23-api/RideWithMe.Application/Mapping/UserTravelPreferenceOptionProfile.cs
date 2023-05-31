using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserTravelPreferenceOptionProfile : BaseProfile
    {
        public UserTravelPreferenceOptionProfile()
        {
            CreateMap<UserTravelPreferenceOptionDto, UserTravelPreferenceOption>().ReverseMap();

            CreateMap<UserTravelPreferenceOptionUpsertDto, UserTravelPreferenceOption>();
        }
    }
}
