using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class TravelPreferenceOptionConfiguration : BaseConfiguration<TravelPreferenceOption>
    {
        public override void Configure(EntityTypeBuilder<TravelPreferenceOption> builder)
        {
            base.Configure(builder);

            builder.Property(s => s.Name).IsRequired();

            builder.HasOne(s => s.TravelPreference)
                .WithMany(s => s.TravelPreferenceOptions)
                .HasForeignKey(s => s.TravelPreferenceId)
                .IsRequired();
        }
    }
}
