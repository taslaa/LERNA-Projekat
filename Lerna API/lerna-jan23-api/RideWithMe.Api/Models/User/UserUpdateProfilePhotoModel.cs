namespace RideWithMe.Api
{
    public class UserUpdateProfilePhotoModel
    {
        public int Id { get; set; }
        public IFormFile ProfilePhoto { get; set; } = null!;
    }
}
