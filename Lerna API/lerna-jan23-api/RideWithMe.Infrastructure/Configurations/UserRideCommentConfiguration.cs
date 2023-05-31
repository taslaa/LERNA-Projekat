using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class UserRideCommentConfiguration : BaseConfiguration<UserRideComment>
    {
        public override void Configure(EntityTypeBuilder<UserRideComment> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Comment)
                   .IsRequired();

            builder.HasOne(e => e.UserRide)
                   .WithMany(e => e.Comments)
                   .HasForeignKey(e => e.UserRideId)
                   .IsRequired();
        }
    }
}
