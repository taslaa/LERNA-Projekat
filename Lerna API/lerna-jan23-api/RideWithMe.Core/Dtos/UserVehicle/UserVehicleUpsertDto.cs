namespace RideWithMe.Core
{
    public class UserVehicleUpsertDto : BaseUpsertDto
    {
        public string Color { get; set; } = null!;
        public string? Notes { get; set; }
        public string LicensePlateNumber { get; set; } = null!;
        public int ManufactureYear { get; set; }

        public int CountryId { get; set; }

        public int UserId { get; set; }

        public int VehicleModelId { get; set; }
    }
}
