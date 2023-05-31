using Microsoft.EntityFrameworkCore;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public partial class DatabaseContext : DbContext
    {
        public DbSet<City> Cities { get; set; } = null!;
        public DbSet<Condition> Conditions { get; set; } = null!;
        public DbSet<Country> Countries { get; set; } = null!;
        public DbSet<Photo> Photos { get; set; } = null!;
        public DbSet<RideMilestone> RideMilestones { get; set; } = null!;
        public DbSet<RideCondition> RideConditions { get; set; } = null!;
        public DbSet<Ride> Rides { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<UserRide> UserRides { get; set; } = null!;
        public DbSet<UserRideComment> UserRideComments { get; set; } = null!;
        public DbSet<UserVehicle> UserVehicles { get; set; } = null!;
        public DbSet<VehicleModel> VehicleModels { get; set; } = null!;
        public DbSet<VehicleBrand> VehicleBrands { get; set; } = null!;
        public DbSet<Report> Reports { get; set; } = null!;
        public DbSet<ReportType> ReportTypes { get; set; } = null!;
        public DbSet<TravelPreference> TravelPreference { get; set; } = null!;
        public DbSet<TravelPreferenceOption> TravelPreferenceOption { get; set; } = null!;
        public DbSet<UserTravelPreferenceOption> UserTravelPreferenceOption { get; set; } = null!;
        public DbSet<RecentSearch> RecentSearches { get; set; } = null!;

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            SeedData(modelBuilder);
            ApplyConfigurations(modelBuilder);
        }
    }
}