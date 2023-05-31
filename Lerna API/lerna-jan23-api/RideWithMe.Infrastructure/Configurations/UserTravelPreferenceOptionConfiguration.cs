using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class UserTravelPreferenceOptionConfiguration : BaseConfiguration<UserTravelPreferenceOption>
    {
        public override void Configure(EntityTypeBuilder<UserTravelPreferenceOption> builder)
        {
            base.Configure(builder);

            builder.HasOne(s => s.User)
                .WithMany(s => s.TravelPreferenceOptions)
                .HasForeignKey(s => s.UserId);

            builder.HasOne(s => s.TravelPreferenceOption)
            .WithMany(s => s.UserTravelPreferenceOptions)
            .HasForeignKey(s => s.UserId);

        }
    }
}
