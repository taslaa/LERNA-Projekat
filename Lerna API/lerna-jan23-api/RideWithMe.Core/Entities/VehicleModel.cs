namespace RideWithMe.Core
{
    public class VehicleModel : BaseEntity
    {
        public string Name { get; set; } = null!;
        public VehicleType VehicleType { get; set; }

        public int VehicleBrandId { get; set; }
        public VehicleBrand VehicleBrand { get; set; } = null!;

        public ICollection<UserVehicle> UserVehicles { get; set; } = null!;
    }
}
