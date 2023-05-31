using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RecentSearchProfile : BaseProfile
    {
        public RecentSearchProfile()
        {
            CreateMap<RecentSearchDto, RecentSearch>().ReverseMap();

            CreateMap<RecentSearchUpsertDto, RecentSearch>();
        }
    }
}
