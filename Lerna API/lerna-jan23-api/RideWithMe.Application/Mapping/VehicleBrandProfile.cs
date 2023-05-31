using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class VehicleBrandProfile : BaseProfile
    {
        public VehicleBrandProfile()
        {
            CreateMap<VehicleBrandDto, VehicleBrand>().ReverseMap();

            CreateMap<VehicleBrandUpsertDto, VehicleBrand>();
        }
    }
}
