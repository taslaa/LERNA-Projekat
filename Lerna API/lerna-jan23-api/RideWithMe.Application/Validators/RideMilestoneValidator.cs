using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RideMilestoneValidator : AbstractValidator<RideMilestoneUpsertDto>
    {
        public RideMilestoneValidator()
        {
            RuleFor(rm => rm.LocationName).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(rm => rm.CityId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
