using RideWithMe.Core;
using RideWithMe.Core.Dtos;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IReportsService : IBaseService<int, ReportDto, ReportUpsertDto, ReportSearchObject>
    {
        Task<OverviewCountDto<int>> GetCountAsync(ReportState reportState, CancellationToken cancellationToken = default);
    }
}