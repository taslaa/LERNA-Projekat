using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class ReportTypeValidator : AbstractValidator<ReportTypeUpsertDto>
    {
        private readonly IReportTypesRepository _reportsTypeRepository;

        public ReportTypeValidator(IReportTypesRepository reportTypesRepository)
        {
            _reportsTypeRepository = reportTypesRepository;
            RuleFor(c => c.Name).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(vb => vb.Name).MustAsync(CheckForValidName).WithErrorCode(ErrorCodes.DuplicateValue);
        }
        private async Task<bool> CheckForValidName(string name, CancellationToken cancellationToken = default)
        {
            return !await _reportsTypeRepository.DoesExistAsync(name, cancellationToken);
        }
    }
}
