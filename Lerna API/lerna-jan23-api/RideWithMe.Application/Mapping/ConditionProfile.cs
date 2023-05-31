using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class ConditionProfile : BaseProfile
    {
        public ConditionProfile()
        {
            CreateMap<ConditionDto, Condition>().ReverseMap();
            CreateMap<CatalogFiltersDto, ConditionDto>().ReverseMap();

            CreateMap<ConditionUpsertDto, Condition>();
        }
    }
}
