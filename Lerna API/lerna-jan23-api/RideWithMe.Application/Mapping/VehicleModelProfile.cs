using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class VehicleModelProfile : BaseProfile
    {
        public VehicleModelProfile()
        {
            CreateMap<VehicleModelDto, VehicleModel>().ReverseMap();

            CreateMap<VehicleModelUpsertDto, VehicleModel>();
        }
    }
}
