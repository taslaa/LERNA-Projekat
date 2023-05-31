using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class TravelPreferenceValidator : AbstractValidator<TravelPreferenceWithOptionsUpsertDto>
    {
        private readonly ITravelPreferenceRepository _travelPreferenceRepository;

        public TravelPreferenceValidator(ITravelPreferenceRepository travelPreferenceRepository)
        {
            _travelPreferenceRepository = travelPreferenceRepository;
            RuleFor(c => c.Name).NotNull().NotEmpty();
            RuleFor(vb => vb.Name).MustAsync(async (vb, name, cancellationToken) => await DoesExistAsync(vb.Name, vb.Id, cancellationToken)).WithErrorCode(ErrorCodes.DuplicateValue);

        }
        private async Task<bool> DoesExistAsync(string name, int? id, CancellationToken cancellationToken = default)
        {
            return !await _travelPreferenceRepository.DoesExistAsync(name, id, cancellationToken);
        }
    }
}
