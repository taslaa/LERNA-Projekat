using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class UserVehicleConfiguration : BaseConfiguration<UserVehicle>
    {
        public override void Configure(EntityTypeBuilder<UserVehicle> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Color)
                   .IsRequired();

            builder.Property(e => e.Notes)
                   .IsRequired(false);

            builder.Property(e => e.LicensePlateNumber)
                   .IsRequired();

            builder.Property(e => e.ManufactureYear)
                   .IsRequired();

            builder.HasOne(e => e.User)
                   .WithMany(e => e.Vehicles)
                   .HasForeignKey(e => e.UserId)
                   .IsRequired();

            builder.HasOne(e => e.Country)
                   .WithMany(e => e.UserVehicles)
                   .HasForeignKey(e => e.CountryId)
                   .IsRequired();

            builder.HasOne(e => e.VehicleModel)
                   .WithMany(e => e.UserVehicles)
                   .HasForeignKey(e => e.VehicleModelId)
                   .IsRequired();
        }
    }
}
