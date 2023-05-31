using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class VehicleModelConfiguration : BaseConfiguration<VehicleModel>
    {
        public override void Configure(EntityTypeBuilder<VehicleModel> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Name)
                   .IsRequired();

            builder.Property(e => e.VehicleType)
                   .IsRequired();

            builder.HasOne(e => e.VehicleBrand)
                   .WithMany(x => x.VehicleModels)
                   .HasForeignKey(x => x.VehicleBrandId)
                   .IsRequired();
        }
    }
}