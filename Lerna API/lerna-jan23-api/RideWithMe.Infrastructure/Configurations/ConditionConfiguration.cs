using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class ConditionConfiguration : BaseConfiguration<Condition>
    {
        public override void Configure(EntityTypeBuilder<Condition> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Name)
                   .IsRequired();

            builder.Property(e => e.Description)
                   .IsRequired(false);
        }
    }
}
