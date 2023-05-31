namespace RideWithMe.Core
{
     public class RideMilestoneUpsertDto : BaseUpsertDto
     {
        public string LocationName { get; set; } = null!;
        public RideMilestoneType Type { get; set; }
        public DateTime? DateTime { get; set; }
        public string? Notes { get; set; }
        public int MilestoneOrderNumber { get; set; }
        public decimal Price { get; set; }

        public int RideId { get; set; }

        public int CityId { get; set; }
    }
}
