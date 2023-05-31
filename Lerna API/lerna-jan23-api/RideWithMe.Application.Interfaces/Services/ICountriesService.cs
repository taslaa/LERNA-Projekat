using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface ICountriesService : IBaseService<int, CountryDto, CountryUpsertDto, BaseSearchObject>
    {

    }
}
