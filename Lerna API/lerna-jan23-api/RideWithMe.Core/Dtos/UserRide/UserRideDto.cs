namespace RideWithMe.Core
{
    public class UserRideDto : BaseDto
    {
        public decimal Price { get; set; }
        public float? ReviewRating { get; set; }
        public string? ReviewComment { get; set; }

        public int UserId { get; set; }
        public UserDto User { get; set; } = null!;

        public int RideId { get; set; }
        public RideDto Ride { get; set; } = null!;
    }
}
