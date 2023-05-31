using RideWithMe.Application.Interfaces;
using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class CatalogFiltersService : ICatalogFiltersService
    {
        private readonly IConditionsService _conditionsService;

        public CatalogFiltersService(IConditionsService conditionsService)
        {
            _conditionsService = conditionsService;
        }

        public async Task<CatalogFiltersDto> PrepareFilters(CancellationToken cancellationToken)
        {
            var model = new CatalogFiltersDto();
            //model.AvailableDepartureTimes = Enum.GetValues<DepartureTimeframeEnum>().ToList();
            model.AvailableOrderings = Enum.GetValues<ListingOrderEnum>().ToList();
            model.AvailableConditions = (await _conditionsService.GetAll(cancellationToken)).ToList();

            var departureTimes = new List<DepartureTimeDto>();
            for (int i = 9; i < 24; i += 3)
            {
                departureTimes.Add(new DepartureTimeDto { FromHour = i, ToHour = i + 3 });
            }
            model.AvailableDepartureTimes = departureTimes;

            return model;
        }
    }
}
