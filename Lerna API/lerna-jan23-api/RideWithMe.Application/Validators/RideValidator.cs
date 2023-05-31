using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class RideValidator : AbstractValidator<RideUpsertDto>
    {
        public RideValidator()
        {
            RuleFor(r => r.Price).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.StartDateTime).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.MaxPassengersCount).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.PaymentType).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.CommunicationType).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.DriverId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
