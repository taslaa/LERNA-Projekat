using Microsoft.AspNetCore.Mvc;

using RideWithMe.Common.Services;

namespace RideWithMe.Api.Controllers
{
    public class EnumsController : BaseController
    {
        private readonly IEnumsService _enumsService;

        public EnumsController(IEnumsService enumsService, ILogger<EnumsController> logger) : base(logger)
        {
            _enumsService = enumsService;
        }

        [HttpGet("vehicle-types")]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 3600)]
        public async Task<IActionResult> GetVehicleTypes() => Ok(await _enumsService.GetVehicleTypesAsync());

        [HttpGet("report-states")]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 3600)]
        public async Task<IActionResult> GetReportStates() => Ok(await _enumsService.GetReportStatesAsync());

        [HttpGet("roles")]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 3600)]
        public async Task<IActionResult> GetRoles() => Ok(await _enumsService.GetRolesAsync());

        [HttpGet("genders")]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 3600)]
        public async Task<IActionResult> GetGenders() => Ok(await _enumsService.GetGenders());

        [HttpGet("payment-types")]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 3600)]
        public async Task<IActionResult> GetPaymentTypes() => Ok(await _enumsService.GetPaymentTypesAsync());

        [HttpGet("communication-types")]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 3600)]
        public async Task<IActionResult> GetCommunicationTypes() => Ok(await _enumsService.GetCommunicationTypesAsync());

        [HttpGet("rideMilestone-types")]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 3600)]
        public async Task<IActionResult> GetRideMilestoneTypes() => Ok(await _enumsService.GetRideMilestoneTypesAsync());
    }
}