
namespace RideWithMe.Core
{
    public class TravelPreference : BaseEntity
    {
        public string Name { get; set; } = null!;
        public ICollection<TravelPreferenceOption> TravelPreferenceOptions { get; set; } = null!;
    }
}
