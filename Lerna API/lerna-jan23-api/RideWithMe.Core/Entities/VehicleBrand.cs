namespace RideWithMe.Core
{
    public class VehicleBrand : BaseEntity
    {
        public string Name { get; set; } = null!;

        public ICollection<VehicleModel> VehicleModels { get; set; } = null!;
    }
}
