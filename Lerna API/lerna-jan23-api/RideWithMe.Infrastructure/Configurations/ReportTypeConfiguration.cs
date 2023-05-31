using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RideWithMe.Infrastructure
{
    public class ReportTypeConfiguration : BaseConfiguration<ReportType>
    {
        public override void Configure(EntityTypeBuilder<ReportType> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Name)
                   .IsRequired();
        }
    }
}