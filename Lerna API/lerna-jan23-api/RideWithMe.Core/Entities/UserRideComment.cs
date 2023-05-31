namespace RideWithMe.Core
{
    public class UserRideComment : BaseEntity
    {
        public string Comment { get; set; } = null!;

        public int UserRideId { get; set; }
        public UserRide UserRide { get; set; } = null!;
    }
}
