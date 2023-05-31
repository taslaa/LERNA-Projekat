namespace RideWithMe.Core
{
    public class CatalogFiltersDto
    {
        public List<ListingOrderEnum> AvailableOrderings { get; set; } = null!;
        public List<DepartureTimeDto> AvailableDepartureTimes { get; set; } = null!;
        public List<ConditionDto> AvailableConditions { get; set; } = null!;
    }
}
