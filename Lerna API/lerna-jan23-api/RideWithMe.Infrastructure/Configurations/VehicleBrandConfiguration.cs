using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class VehicleBrandConfiguration : BaseConfiguration<VehicleBrand>
    {
        public override void Configure(EntityTypeBuilder<VehicleBrand> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Name)
                   .IsRequired();
        }
    }
}
