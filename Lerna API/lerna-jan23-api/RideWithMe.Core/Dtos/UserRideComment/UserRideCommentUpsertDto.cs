namespace RideWithMe.Core
{
    public class UserRideCommentUpsertDto : BaseUpsertDto
    {
        public string Comment { get; set; } = null!;

        public int UserRideId { get; set; }
    }
}
