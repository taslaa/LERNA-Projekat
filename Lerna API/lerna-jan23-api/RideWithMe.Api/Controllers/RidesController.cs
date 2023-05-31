using Microsoft.AspNetCore.Mvc;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class RidesController : BaseCrudController<RideDto, RideUpsertDto, RideSearchObject, IRidesService>
    {
        public RidesController(IRidesService service, ILogger<RidesController> logger) : base(service, logger)
        {
        }

        [HttpGet("Count")]
        public async Task<IActionResult> GetCount(DateTime dateTime, CancellationToken cancellationToken = default)
        {
            try
            {
                var result = await Service.GetCountAsync(dateTime, cancellationToken);
                return Ok(result);
            }
            catch (Exception e)
            {
                Logger.LogError(e, "Error while trying to get total number of rides");
                return BadRequest();
            }
        }

        //[HttpGet("Filters")]
        //public async Task<IActionResult> GetFiltersByRides(string locationFrom, string locationTo, DateTime dateTime, CancellationToken cancellationToken = default)
        //{
        //    try
        //    {
        //        var result = await Service.GetFiltersByRides(locationFrom, locationTo, dateTime, cancellationToken);
        //        return Ok(result);
        //    }
        //    catch (Exception e)
        //    {
        //        Logger.LogError(e, "Error while trying to get total number of rides");
        //        return BadRequest();
        //    }
        //}
    }
}
