using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class ReportConfiguration : BaseConfiguration<Report>
    {
        public override void Configure(EntityTypeBuilder<Report> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Note)
                   .IsRequired();

            builder.Property(e => e.ReportState)
                   .IsRequired();

            builder.HasOne(e => e.ReportType)
                   .WithMany(e => e.Reports)
                   .HasForeignKey(e => e.TypeId)
                   .IsRequired();

            builder.HasOne(e => e.ReporterUser)
                   .WithMany(e => e.MyReports)
                   .HasForeignKey(e => e.ReporterUserId)
                   .OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.NoAction)
                   .IsRequired();

            builder.HasOne(e => e.ReportedUser)
                   .WithMany(e => e.Reports)
                   .OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.NoAction)
                   .HasForeignKey(e => e.ReportedUserId)
                   .IsRequired();
        }
    }
}