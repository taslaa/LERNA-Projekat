namespace RideWithMe.Core
{
    public class UserTravelPreferenceOptionUpsertDto : BaseUpsertDto
    {
        public int UserId { get; set; }
        public int TravelPreferenceOptionId { get; set; }
    }
}
