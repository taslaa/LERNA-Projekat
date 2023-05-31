using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class ReportTypesService : BaseService<ReportType, ReportTypeDto, ReportTypeUpsertDto, ReportTypeSearchObject, IReportTypesRepository>, IReportTypesService
    {
        public ReportTypesService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<ReportTypeUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
