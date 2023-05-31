using AutoMapper;
using FluentValidation;
using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class CitiesService : BaseService<City, CityDto, CityUpsertDto, CitiesSearchObject, ICitiesRepository>, ICitiesService
    {
        public CitiesService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<CityUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {

        }

        public async Task<IEnumerable<CityDto>> GetByCountryIdAsync(int countryId, CancellationToken cancellationToken = default)
        {
            var cities = await CurrentRepository.GetByCountryIdAsync(countryId, cancellationToken);

            return Mapper.Map<IEnumerable<CityDto>>(cities);
        }

    }
}
