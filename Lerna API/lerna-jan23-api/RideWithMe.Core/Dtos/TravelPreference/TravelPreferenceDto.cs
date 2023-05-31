
namespace RideWithMe.Core
{
    public class TravelPreferenceDto : BaseDto
    {
        public string Name { get; set; } = null!;
        public ICollection<TravelPreferenceOptionDto> TravelPreferenceOptions { get; set; } = null!;
    }
}
