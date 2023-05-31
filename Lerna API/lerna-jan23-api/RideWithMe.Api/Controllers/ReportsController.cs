using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace RideWithMe.Api.Controllers
{
    public class ReportsController : BaseCrudController<ReportDto, ReportUpsertDto, ReportSearchObject, IReportsService>
    {
        public ReportsController(IReportsService service, ILogger<ReportsController> logger) : base(service, logger)
        {

        }
        [HttpGet("Count")]
        public async Task<IActionResult> GetCount(ReportState reportState, CancellationToken cancellationToken = default)
        {
            try
            {
                var result = await Service.GetCountAsync(reportState, cancellationToken);
                return Ok(result);
            }
            catch (Exception e)
            {
                Logger.LogError(e, "Error while trying to get total number of reports");
                return BadRequest();
            }
        }

        [HttpPost]
        public override  Task<IActionResult> Post([FromBody] ReportUpsertDto upsertDto, CancellationToken cancellationToken = default)
        {
            upsertDto.ReportState = ReportState.InReview;
            return base.Post(upsertDto, cancellationToken);
         
        }
    }
}
