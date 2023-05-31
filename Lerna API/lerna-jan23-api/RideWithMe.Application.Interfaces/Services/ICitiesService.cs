using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface ICitiesService : IBaseService<int, CityDto, CityUpsertDto, CitiesSearchObject>
    {
        Task<IEnumerable<CityDto>> GetByCountryIdAsync(int countryId, CancellationToken cancellationToken = default);
    }
}
