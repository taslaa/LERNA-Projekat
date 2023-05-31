using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class ReportTypeProfile : BaseProfile
    {
        public ReportTypeProfile()
        {
            CreateMap<ReportTypeDto, ReportType>().ReverseMap();

            CreateMap<ReportTypeUpsertDto, ReportType>();
        }
    }
}
