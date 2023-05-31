using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class TravelPreferenceConfiguration : BaseConfiguration<TravelPreference>
    {
        public override void Configure(EntityTypeBuilder<TravelPreference> builder)
        {
            base.Configure(builder);

            builder.Property(s=>s.Name).IsRequired();
        }
    }
}
