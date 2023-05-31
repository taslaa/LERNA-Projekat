using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Core.Dtos;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class UserRidesService : BaseService<UserRide, UserRideDto, UserRideUpsertDto, BaseSearchObject, IUserRidesRepository>, IUserRidesService
    {
        public UserRidesService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<UserRideUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }

        public async Task<OverviewCountDto<decimal>> GetTotalIncomeAsync(CancellationToken cancellationToken = default)
        {
            var income = await CurrentRepository.GetTotalIncomeAsync(cancellationToken);
            return new OverviewCountDto<decimal> { Count = income };
        }
    }
}
