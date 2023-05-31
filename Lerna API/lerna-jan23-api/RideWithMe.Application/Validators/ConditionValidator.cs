using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class ConditionValidator : AbstractValidator<ConditionUpsertDto>
    {
        private readonly IConditionsRepository _conditionsRepository;

        public ConditionValidator(IConditionsRepository conditionsRepository)
        {
            _conditionsRepository = conditionsRepository;

            RuleFor(c => c.Name).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(vb => vb.Name).MustAsync(async (vb, name, cancellationToken) => await DoesExistAsync(vb.Name, vb.Id, cancellationToken)).WithErrorCode(ErrorCodes.DuplicateValue);
        }

        private async Task<bool> DoesExistAsync(string name, int? id, CancellationToken cancellationToken = default)
        {
            return !await _conditionsRepository.DoesExistAsync(name, id, cancellationToken);
        }
    }
}
