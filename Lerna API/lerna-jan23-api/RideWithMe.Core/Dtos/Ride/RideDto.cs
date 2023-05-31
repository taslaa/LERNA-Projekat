namespace RideWithMe.Core
{
    public class RideDto : BaseDto
    {
        public decimal Price { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime? EndDateTime { get; set; }
        public int MaxPassengersCount { get; set; }
        public PaymentType PaymentType { get; set; }
        public CommunicationType CommunicationType { get; set; }
        public string? Notes { get; set; }

        public int DriverVehicleId { get; set; }
        public UserVehicle DriverVehicle { get; set; } = null!;

        public int DriverId { get; set; }
        public UserDto Driver { get; set; } = null!;

        public ICollection<RideMilestoneDto> Milestones { get; set; } = null!;

    }
}
