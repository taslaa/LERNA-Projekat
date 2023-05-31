namespace RideWithMe.Core
{
    public class UserVehicleDto : BaseDto
    {
        public string Color { get; set; } = null!;
        public string? Notes { get; set; }
        public string LicensePlateNumber { get; set; } = null!;
        public int ManufactureYear { get; set; }

        public int CountryId { get; set; }
        public CountryDto Country { get; set; } = null!;

        public int UserId { get; set; }
        public UserDto User { get; set; } = null!;

        public int VehicleModelId { get; set; }
        public VehicleModelDto VehicleModel { get; set; } = null!;
    }
}
