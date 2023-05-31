using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface ICountriesRepository : IBaseRepository<Country, int, BaseSearchObject>
    {
    }
}