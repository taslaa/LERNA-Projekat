namespace RideWithMe.Core
{
    public class VehicleModelDto : BaseDto
    {
        public string Name { get; set; } = null!;
        public VehicleType VehicleType { get; set; }

        public int VehicleBrandId { get; set; }
        public VehicleBrandDto VehicleBrand { get; set; } = null!;

        public List<UserVehicle> UserDriver { get; set; } = null!;

    }
}
