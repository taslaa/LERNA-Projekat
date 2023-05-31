namespace RideWithMe.Core
{
    public class UserRideUpsertDto : BaseUpsertDto
    {
        public decimal Price { get; set; }
        public float? ReviewRating { get; set; }
        public string? ReviewComment { get; set; }

        public int UserId { get; set; }

        public int RideId { get; set; }
    }
}
