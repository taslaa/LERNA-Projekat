﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class CountryConfiguration : BaseConfiguration<Country>
    {
        public override void Configure(EntityTypeBuilder<Country> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Name)
                   .IsRequired();

            builder.Property(e => e.Abbreviation)
                   .IsRequired();

            builder.Property(e => e.IsActive)
                   .IsRequired();
        }
    }
}
