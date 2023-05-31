using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class ReportTypesController : BaseCrudController<ReportTypeDto, ReportTypeUpsertDto, ReportTypeSearchObject, IReportTypesService>
    {
        public ReportTypesController(IReportTypesService service, ILogger<ReportTypesController> logger) : base(service, logger)
        {
        }
    }
}
