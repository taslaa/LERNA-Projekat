using RideWithMe.Core;
using RideWithMe.Core.Dtos;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IRidesService : IBaseService<int, RideDto, RideUpsertDto, RideSearchObject>
    {
        Task<OverviewCountDto<int>> GetCountAsync(DateTime dateTime, CancellationToken cancellationToken = default);
    }
}
