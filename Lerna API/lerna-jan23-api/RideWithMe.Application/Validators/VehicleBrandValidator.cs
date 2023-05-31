﻿using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class VehicleBrandValidator : AbstractValidator<VehicleBrandUpsertDto>
    {
        private readonly IVehicleBrandsRepository _vehicleBrandsRepository;

        public VehicleBrandValidator(IVehicleBrandsRepository vehicleBrandsRepository)
        {
            this._vehicleBrandsRepository = vehicleBrandsRepository;
            RuleFor(vb => vb.Name).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(vb => vb.Name).MustAsync(async (vb, name, cancellationToken) => await DoesExistAsync(vb.Name, vb.Id, cancellationToken)).WithErrorCode(ErrorCodes.DuplicateValue);
        }

        private async Task<bool> DoesExistAsync(string name, int? id, CancellationToken cancellationToken = default)
        {
            return !await _vehicleBrandsRepository.DoesExistAsync(name, id, cancellationToken);
        }
    }
}