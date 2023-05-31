
namespace RideWithMe.Core
{
    public class UserTravelPreferenceOption : BaseEntity
    {
        public int UserId { get; set; }
        public User User { get; set; } = null!;

        public int TravelPreferenceOptionId { get; set; }
        public TravelPreferenceOption TravelPreferenceOption { get; set; } = null!;
    }
}

