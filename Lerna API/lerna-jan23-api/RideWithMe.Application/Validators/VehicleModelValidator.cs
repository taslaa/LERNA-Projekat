using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class VehicleModelValidator : AbstractValidator<VehicleModelUpsertDto>
    {
        public VehicleModelValidator()
        {
            RuleFor(vm => vm.Name).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(vm => vm.VehicleType).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(vm => vm.VehicleBrandId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}