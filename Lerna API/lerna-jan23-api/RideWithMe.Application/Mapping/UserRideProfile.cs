using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserRideProfile : BaseProfile
    {
        public UserRideProfile()
        {
            CreateMap<UserRideDto, UserRide>().ReverseMap();

            CreateMap<UserRideUpsertDto, UserRide>();
        }
    }
}
