using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface ICitiesRepository : IBaseRepository<City, int, CitiesSearchObject>
    {
        Task<IEnumerable<City>> GetByCountryIdAsync(int countryId, CancellationToken cancellationToken = default);
    }
}