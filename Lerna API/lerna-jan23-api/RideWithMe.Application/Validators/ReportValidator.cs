using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class ReportValidator : AbstractValidator<ReportUpsertDto>
    {
        public ReportValidator()
        {
            RuleFor(r => r.Note).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(r => r.ReportState).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.TypeId).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.ReporterUserId).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(r => r.ReportedUserId).NotNull().WithErrorCode(ErrorCodes.NotNull);
        }
    }
}
