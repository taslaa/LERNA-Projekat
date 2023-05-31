using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserVehicleProfile : BaseProfile
    {
        public UserVehicleProfile()
        {
            CreateMap<UserVehicleDto, UserVehicle>().ReverseMap();

            CreateMap<UserVehicleUpsertDto, UserVehicle>();
        }
    }
}
