using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class RideMilestoneConfiguration : BaseConfiguration<RideMilestone>
    {
        public override void Configure(EntityTypeBuilder<RideMilestone> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.LocationName)
                   .IsRequired();

            builder.Property(e => e.Type)
                   .IsRequired();

            builder.Property(e => e.DateTime)
                   .IsRequired(false);

            builder.Property(e => e.Notes)
                   .IsRequired(false);

            builder.Property(e => e.Order)
                   .HasDefaultValue(0)
                   .IsRequired();

            builder.HasOne(e => e.Ride)
                   .WithMany(e => e.Milestones)
                   .HasForeignKey(e => e.RideId)
                   .IsRequired();

            builder.HasOne(e => e.City)
                   .WithMany(e => e.Milestones)
                   .HasForeignKey(e => e.CityId)
                   .IsRequired();
        }
    }
}
