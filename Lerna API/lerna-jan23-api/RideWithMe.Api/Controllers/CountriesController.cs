using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Api.Controllers
{
    public class CountriesController : BaseCrudController<CountryDto, CountryUpsertDto, BaseSearchObject, ICountriesService>
    {
        public CountriesController(ICountriesService service, ILogger<CountriesController> logger) : base(service, logger)
        {
        }
    }
}
