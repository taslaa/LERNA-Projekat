using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Core.Dtos;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class ReportsService : BaseService<Report, ReportDto, ReportUpsertDto, ReportSearchObject, IReportsRepository>, IReportsService
    {
        public ReportsService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<ReportUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }

        public async Task<OverviewCountDto<int>> GetCountAsync(ReportState reportState, CancellationToken cancellationToken = default)
        {
            var count = await CurrentRepository.GetCountByReportStateAsync(reportState, cancellationToken);
            return new OverviewCountDto<int> { Count = count };
        }
    }
}
