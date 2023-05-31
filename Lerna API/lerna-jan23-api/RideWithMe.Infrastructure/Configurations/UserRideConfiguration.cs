using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class UserRideConfiguration : BaseConfiguration<UserRide>
    {
        public override void Configure(EntityTypeBuilder<UserRide> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Price)
                   .IsRequired();

            builder.Property(e => e.ReviewRating)
                   .IsRequired(false);

            builder.Property(e => e.ReviewComment)
                   .IsRequired(false);

            builder.HasOne(e => e.User)
                   .WithMany(e => e.UserRides)
                   .HasForeignKey(e => e.UserId)
                   .OnDelete(DeleteBehavior.NoAction)
                   .IsRequired();

            builder.HasOne(e => e.Ride)
                   .WithMany(e => e.Passengers)
                   .HasForeignKey(e => e.RideId)
                   .IsRequired();
        }
    }
}
