using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class RecentSearchConfiguration : BaseConfiguration<RecentSearch>
    {
        public override void Configure(EntityTypeBuilder<RecentSearch> builder)
        {
            base.Configure(builder);

            builder.Property(r=>r.Name).IsRequired();

            builder.HasOne(r => r.User)
                .WithMany(r => r.RecentSearches)
                .HasForeignKey(r => r.UserId)
                .IsRequired();
        }
    }
}
