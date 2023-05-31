namespace RideWithMe.Core
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public string PasswordSalt { get; set; } = null!;
        public Role Role { get; set; }
        public DateTime? LastSignInAt { get; set; }
        public bool IsVerified { get; set; }
        public bool IsActive { get; set; }
        public Gender Gender { get; set; }
        public string? Biography { get; set; }
        public DateTime BirthDate { get; set; }

        public int? ProfilePhotoId { get; set; }
        public Photo? ProfilePhoto { get; set; }

        public ICollection<Ride> Rides { get; set; } = null!;
        public ICollection<UserRide> UserRides { get; set; } = null!;
        public ICollection<UserVehicle> Vehicles { get; set; } = null!;
        public ICollection<Report> MyReports { get; set; } = null!;
        public ICollection<Report> Reports { get; set; } = null!;
        public ICollection<UserTravelPreferenceOption> TravelPreferenceOptions { get; set; } = null!;
        public ICollection<RecentSearch> RecentSearches { get; set; } = null!;
    }
}
