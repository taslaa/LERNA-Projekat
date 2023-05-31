using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserRideValidator : AbstractValidator<UserRideUpsertDto>
    {
        public UserRideValidator()
        {
            RuleFor(ur => ur.Price).NotNull().WithErrorCode(ErrorCodes.NotNull)
                                   .GreaterThan(0).WithErrorCode(ErrorCodes.InvalidValue);
            RuleFor(ur => ur.UserId).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(ur => ur.RideId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
