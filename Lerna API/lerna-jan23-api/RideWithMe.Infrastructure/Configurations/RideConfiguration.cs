using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class RideConfiguration : BaseConfiguration<Ride>
    {
        public override void Configure(EntityTypeBuilder<Ride> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Price)
                   .IsRequired();

            builder.Property(e => e.StartDateTime)
                   .IsRequired();

            builder.Property(e => e.EndDateTime)
                   .IsRequired(false);

            builder.Property(e => e.MaxPassengersCount)
                   .IsRequired();

            builder.Property(e => e.PaymentType)
                   .IsRequired();

            builder.Property(e => e.CommunicationType)
                   .IsRequired();

            builder.Property(e => e.Notes)
                   .IsRequired(false);

            builder.HasOne(e => e.Driver)
                   .WithMany(e => e.Rides)
                   .HasForeignKey(e => e.DriverId)
                   .OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.NoAction)
                   .IsRequired();

            builder.HasOne(e => e.DriverVehicle)
                   .WithMany(e => e.Rides)
                   .HasForeignKey(e => e.DriverVehicleId)
                   .OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.NoAction)
                   .IsRequired();
        }
    }
}
