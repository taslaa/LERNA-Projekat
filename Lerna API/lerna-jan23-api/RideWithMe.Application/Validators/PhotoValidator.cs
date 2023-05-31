using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class PhotoValidator : AbstractValidator<PhotoUpsertDto>
    {
        public PhotoValidator()
        {
            RuleFor(p => p.Data).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
