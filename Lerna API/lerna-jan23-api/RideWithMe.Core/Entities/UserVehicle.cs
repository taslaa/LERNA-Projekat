namespace RideWithMe.Core
{
    public class UserVehicle : BaseEntity
    {
        public string Color { get; set; } = null!;
        public string? Notes { get; set; }
        public string LicensePlateNumber { get; set; } = null!;
        public int ManufactureYear { get; set; }

        public int CountryId { get; set; }
        public Country Country { get; set; } = null!;

        public int UserId { get; set; }
        public User User { get; set; } = null!;

        public int VehicleModelId { get; set; }
        public VehicleModel VehicleModel { get; set; } = null!;

        public ICollection<Ride> Rides { get; set; } = null!;
    }
}
