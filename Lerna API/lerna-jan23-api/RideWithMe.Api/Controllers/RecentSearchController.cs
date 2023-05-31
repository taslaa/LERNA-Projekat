using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    [Authorize]
    public class RecentSearchController : BaseCrudController<RecentSearchDto, RecentSearchUpsertDto, RecentSearchObject, IRecentSearchService>
    {
        public RecentSearchController(IRecentSearchService service, ILogger<BaseController> logger) : base(service, logger)
        {
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAll()
        {
            try
            {
               await Service.DeleteAll();
                return Ok();
            }
            catch (Exception e)
            {
                Logger.LogError(e, "Error while deleting all data!");
                return BadRequest();
            }
        }
    }
}
