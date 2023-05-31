namespace RideWithMe.Core
{
    public class TravelPreferenceWithOptionsUpsertDto : BaseUpsertDto
    {
        public string Name { get; set; } = null!;
        public ICollection<TravelPreferenceOptionUpsertDto> TravelPreferenceOptions { get; set; } = null!;
    }
}
