using RideWithMe.Core;
using RideWithMe.Core.Dtos;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IUserRidesService : IBaseService<int, UserRideDto, UserRideUpsertDto, BaseSearchObject>
    {
        Task<OverviewCountDto<decimal>> GetTotalIncomeAsync(CancellationToken cancellationToken = default);
    }
}