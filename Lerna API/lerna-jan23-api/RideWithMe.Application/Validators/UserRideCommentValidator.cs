using FluentValidation;
using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserRideCommentValidator : AbstractValidator<UserRideCommentUpsertDto>
    {
        public UserRideCommentValidator()
        {
            RuleFor(urc => urc.Comment).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(urc => urc.UserRideId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
