using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class CityProfile : BaseProfile
    {
        public CityProfile()
        {
            CreateMap<CityDto, City>().ReverseMap();

            CreateMap<CityUpsertDto, City>();
        }
    }
}
