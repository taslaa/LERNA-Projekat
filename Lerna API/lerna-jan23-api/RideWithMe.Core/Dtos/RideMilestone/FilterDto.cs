namespace RideWithMe.Core
{
    public class FilterDto : BaseDto
    {
        public decimal MinPrice { get; set; }
        public decimal MaxPrice { get; set; }
        public List<int> PassengersCount { get; set; } = null!;
        public List<string> VehicleBrand { get; set; } = null!;
    }
}
