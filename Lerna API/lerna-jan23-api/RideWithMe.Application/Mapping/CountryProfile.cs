using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class CountryProfile : BaseProfile
    {
        public CountryProfile()
        {
            CreateMap<CountryDto, Country>().ReverseMap();

            CreateMap<CountryUpsertDto, Country>();
        }
    }
}
