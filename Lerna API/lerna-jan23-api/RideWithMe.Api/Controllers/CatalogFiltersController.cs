using Microsoft.AspNetCore.Mvc;
using RideWithMe.Application.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class CatalogFiltersController : BaseController
    {
        private readonly ICatalogFiltersService _catalogFiltersService;
        public CatalogFiltersController(ILogger<BaseController> logger, ICatalogFiltersService catalogFiltersService) : base(logger)
        {
            _catalogFiltersService = catalogFiltersService;
        }

        [HttpGet("GetFilters")]
        public async Task<IActionResult> GetFilters(CancellationToken cancellationToken = default)
        {
            try
            {
                var filters = await _catalogFiltersService.PrepareFilters(cancellationToken);

                return Ok(filters);
            }
            catch (Exception e)
            {
                Logger.LogError(e, "Error while getting filetrs");
                return BadRequest();
            }
        }

    }
}
