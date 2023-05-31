namespace RideWithMe.Core
{
    public class TravelPreferenceOptionUpsertDto : BaseUpsertDto
    {
        public string Name { get; set; } = null!;
        public int TravelPreferenceId { get; set; }
    }
}
