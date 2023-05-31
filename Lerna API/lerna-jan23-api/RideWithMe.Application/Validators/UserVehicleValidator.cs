using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserVehicleValidator : AbstractValidator<UserVehicleUpsertDto>
    {
        public UserVehicleValidator()
        {
            RuleFor(uv => uv.Color).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(uv => uv.LicensePlateNumber).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(uv => uv.ManufactureYear).NotNull().WithErrorCode(ErrorCodes.NotEmpty)
                                             .GreaterThanOrEqualTo(1900).WithErrorCode(ErrorCodes.InvalidValue);
            RuleFor(uv => uv.UserId).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(uv => uv.CountryId).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(uv => uv.VehicleModelId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
