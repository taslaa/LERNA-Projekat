using FluentValidation;
using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class TravelPreferenceOptionValidator: AbstractValidator<TravelPreferenceOptionUpsertDto>
    {
        public TravelPreferenceOptionValidator()
        {
            RuleFor(c => c.Name).NotNull().NotEmpty();
            RuleFor(c => c.TravelPreferenceId).NotNull();
        }
    }
}
