namespace RideWithMe.Core
{
    public class RideUpsertDto : BaseUpsertDto
    {
        public decimal Price { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime? EndDateTime { get; set; }
        public int MaxPassengersCount { get; set; }
        public PaymentType PaymentType { get; set; }
        public CommunicationType CommunicationType { get; set; }
        public string? Notes { get; set; }

        public int DriverId { get; set; }
        public int DriverVehicleId { get; set; }

        public List<RideMilestoneUpsertDto> Milestones { get; set; } = null!;
    }
}
