using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RideConditionValidator : AbstractValidator<RideConditionUpsertDto>
    {
        public RideConditionValidator() 
        {
            RuleFor(rc => rc.RideId).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(rc => rc.ConditionId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
