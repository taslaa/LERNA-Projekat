namespace RideWithMe.Core
{
    public class UserRide : BaseEntity
    {
        public decimal Price { get; set; }
        public float? ReviewRating { get; set; }
        public string? ReviewComment { get; set; }

        public int UserId { get; set; }
        public User User { get; set; } = null!;

        public int RideId { get; set; }
        public Ride Ride { get; set; } = null!;

        public ICollection<UserRideComment> Comments { get; set; } = null!;
    }
}
