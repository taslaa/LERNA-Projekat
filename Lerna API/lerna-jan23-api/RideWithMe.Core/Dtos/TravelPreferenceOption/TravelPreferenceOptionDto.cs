namespace RideWithMe.Core
{
    public class TravelPreferenceOptionDto : BaseDto
    {
        public string Name { get; set; } = null!;
        public int TravelPreferenceId { get; set; }
    }
}
