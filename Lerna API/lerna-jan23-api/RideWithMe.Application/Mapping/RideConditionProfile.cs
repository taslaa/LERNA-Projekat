using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RideConditionProfile : BaseProfile
    {
        public RideConditionProfile()
        {
            CreateMap<RideConditionDto, RideCondition>().ReverseMap();

            CreateMap<RideConditionUpsertDto, RideCondition>();
        }
    }
}
