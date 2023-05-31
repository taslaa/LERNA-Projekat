namespace RideWithMe.Core
{
    public class RecentSearchDto : BaseDto
    {
        public string Name { get; set; } = null!;
        public int UserId { get; set; }
        public UserDto User { get; set; } = null!;
    }
}
