namespace RideWithMe.Core
{
    public class VehicleModelUpsertDto : BaseUpsertDto
    {
        public string Name { get; set; } = null!;
        public VehicleType VehicleType { get; set; }

        public int VehicleBrandId { get; set; }
    }
}
