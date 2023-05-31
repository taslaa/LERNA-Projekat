using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class ReportProfile : BaseProfile
    {
        public ReportProfile()
        {
            CreateMap<ReportDto, Report>().ReverseMap();

            CreateMap<ReportUpsertDto, Report>();
        }
    }
}
