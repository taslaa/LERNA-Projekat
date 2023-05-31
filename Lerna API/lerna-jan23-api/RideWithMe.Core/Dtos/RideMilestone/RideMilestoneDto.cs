namespace RideWithMe.Core
{
    public class RideMilestoneDto : BaseDto
    {
        public string LocationName { get; set; } = null!;
        public RideMilestoneType Type { get; set; }
        public DateTime? DateTime { get; set; }
        public string? Notes { get; set; }
        public int MilestoneOrderNumber { get; set; }
        public decimal Price { get; set; }

        public int RideId { get; set; }
        public RideDto Ride { get; set; } = null!;

        public int CityId { get; set; }
        public CityDto City { get; set; } = null!;
    }
}
