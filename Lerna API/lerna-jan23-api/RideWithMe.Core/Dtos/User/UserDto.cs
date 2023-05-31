namespace RideWithMe.Core
{
    public class UserDto : BaseDto
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public Role Role { get; set; }
        public int RidesRatingCount { get; set; }
        public float? RidesAverageRating { get; set; }
        public DateTime? LastSignInAt { get; set; }
        public bool IsVerified { get; set; }
        public bool IsActive { get; set; }
        public Gender Gender { get; set; }
        public string? Biography { get; set; }
        public DateTime BirthDate { get; set; }

        public int? ProfilePhotoId { get; set; }
        public PhotoDto? ProfilePhoto { get; set; }
    }
}
