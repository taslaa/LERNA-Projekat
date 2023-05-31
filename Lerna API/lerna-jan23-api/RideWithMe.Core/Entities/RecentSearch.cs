namespace RideWithMe.Core
{
    public class RecentSearch : BaseEntity
    {
        public string Name { get; set; } = null!;
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }
}
