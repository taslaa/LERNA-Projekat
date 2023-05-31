using FluentValidation;
using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RecentSearchValidator : AbstractValidator<RecentSearchUpsertDto>
    {
        public RecentSearchValidator()
        {
            RuleFor(r => r.Name).NotNull().NotEmpty();
        }
    }
}
