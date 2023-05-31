using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class RideConditionConfiguration : BaseConfiguration<RideCondition>
    {
        public override void Configure(EntityTypeBuilder<RideCondition> builder)
        {
            base.Configure(builder);

            builder.HasOne(e => e.Ride)
                   .WithMany(e => e.Conditions)
                   .HasForeignKey(e => e.RideId)
                   .IsRequired();

            builder.HasOne(e => e.Condition)
                   .WithMany(e => e.Rides)
                   .HasForeignKey(e => e.ConditionId)
                   .IsRequired();
        }
    }
}
