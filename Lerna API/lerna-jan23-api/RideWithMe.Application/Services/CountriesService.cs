using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class CountriesService : BaseService<Country, CountryDto, CountryUpsertDto, BaseSearchObject, ICountriesRepository>, ICountriesService
    {
        public CountriesService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<CountryUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {

        }
    }
}
