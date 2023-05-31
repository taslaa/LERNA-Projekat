using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;
namespace RideWithMe.Application.Interfaces
{
    public interface IReportTypesService : IBaseService<int, ReportTypeDto, ReportTypeUpsertDto, ReportTypeSearchObject>
    {
    }
}