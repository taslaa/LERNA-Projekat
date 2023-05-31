namespace RideWithMe.Core
{
    public class UserRideCommentDto : BaseDto
    {
        public string Comment { get; set; } = null!;

        public int UserRideId { get; set; }
        public UserRideDto UserRide { get; set; } = null!;
    }
}
