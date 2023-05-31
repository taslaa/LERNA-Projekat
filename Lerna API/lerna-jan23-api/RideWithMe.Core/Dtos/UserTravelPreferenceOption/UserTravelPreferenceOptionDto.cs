namespace RideWithMe.Core
{
    public class UserTravelPreferenceOptionDto : BaseDto
    {
        public int UserId { get; set; }
        public UserDto User { get; set; } = null!;
        public int TravelPreferenceOptionId { get; set; }
        public TravelPreferenceOptionDto TravelPreferenceOption { get; set; } = null!;
    }
}
