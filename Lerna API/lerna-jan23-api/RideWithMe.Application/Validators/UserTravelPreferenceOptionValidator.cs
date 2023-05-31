using FluentValidation;
using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserTravelPreferenceOptionValidator : AbstractValidator<UserTravelPreferenceOptionUpsertDto>
    {
        public UserTravelPreferenceOptionValidator()
        {
            RuleFor(c => c.UserId).NotNull();
            RuleFor(c => c.TravelPreferenceOptionId).NotNull();
        }
    }
}
