using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace RideWithMe.Api.Controllers
{
    public class UserRidesController : BaseCrudController<UserRideDto, UserRideUpsertDto, BaseSearchObject, IUserRidesService>
    {
        public UserRidesController(IUserRidesService service, ILogger<UserRidesController> logger) : base(service, logger)
        {
        }
        [HttpGet("TotalIncome")]
        public async Task<IActionResult> GetTotalIncome(CancellationToken cancellationToken = default)
        {
            try
            {
                var result = await Service.GetTotalIncomeAsync(cancellationToken);
                return Ok(result);
            }
            catch (Exception e)
            {
                Logger.LogError(e, "Error while trying to get total incomes");
                return BadRequest();
            }
        }
    }
}
