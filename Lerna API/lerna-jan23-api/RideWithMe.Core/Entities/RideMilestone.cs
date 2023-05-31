namespace RideWithMe.Core
{
    public class RideMilestone : BaseEntity
    {
        public string LocationName { get; set; } = null!;
        public RideMilestoneType Type { get; set; }
        public DateTime? DateTime { get; set; }
        public string? Notes { get; set; }
        public int Order { get; set; }
        public decimal Price { get; set; }

        public int RideId { get; set; }
        public Ride Ride { get; set; } = null!;

        public int CityId { get; set; }
        public City City { get; set; } = null!;
    }
}
