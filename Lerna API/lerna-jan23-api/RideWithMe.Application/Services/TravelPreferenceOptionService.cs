using AutoMapper;
using FluentValidation;
using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class TravelPreferenceOptionService : BaseService<TravelPreferenceOption, TravelPreferenceOptionDto, TravelPreferenceOptionUpsertDto, BaseSearchObject, ITravelPreferenceOptionRepository>, ITravelPreferenceOptionService
    {
        public TravelPreferenceOptionService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<TravelPreferenceOptionUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
