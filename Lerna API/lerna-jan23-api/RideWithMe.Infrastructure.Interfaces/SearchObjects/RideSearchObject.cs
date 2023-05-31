using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public class RideSearchObject : BaseSearchObject
    {
        public int? CityFromId { get; set; }
        public int? CityToId { get; set; }
        public DateTime? StartDate { get; set; }
        public int? PassengersCount { get; set; }
        public ListingOrderEnum? ListingOrder { get; set; }
        public List<int>? ConditionsIds { get; set; }
        public DepartureTimeDto? DepartureTime { get; set; }
    }
}
