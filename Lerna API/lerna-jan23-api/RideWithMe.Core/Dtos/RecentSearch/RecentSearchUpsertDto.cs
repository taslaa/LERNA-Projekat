namespace RideWithMe.Core
{
    public class RecentSearchUpsertDto : BaseUpsertDto
    {
        public string Name { get; set; } = null!;
        public int UserId { get; set; }
    }
}
