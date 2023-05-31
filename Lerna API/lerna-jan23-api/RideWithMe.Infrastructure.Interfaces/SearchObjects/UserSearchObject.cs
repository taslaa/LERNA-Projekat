namespace RideWithMe.Infrastructure.Interfaces
{
    public class UserSearchObject : BaseSearchObject
    {
        public string? Query { get; set; }
        public bool? IsVerified { get; set; }
        public bool? IsActive { get; set; }
    }
}