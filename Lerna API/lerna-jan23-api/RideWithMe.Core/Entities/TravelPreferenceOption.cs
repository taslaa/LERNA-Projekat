
namespace RideWithMe.Core
{
    public class TravelPreferenceOption : BaseEntity
    {
        public string Name { get; set; } = null!;
        public int TravelPreferenceId { get; set; }
        public TravelPreference TravelPreference { get; set; } = null!;
        public ICollection<UserTravelPreferenceOption> UserTravelPreferenceOptions { get; set; } = null!;
    }
}
