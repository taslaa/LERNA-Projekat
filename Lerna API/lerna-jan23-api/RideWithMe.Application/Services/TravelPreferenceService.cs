using AutoMapper;
using FluentValidation;
using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class TravelPreferenceService : BaseService<TravelPreference, TravelPreferenceDto, TravelPreferenceWithOptionsUpsertDto, TravelPreferenceSearchObject, ITravelPreferenceRepository>, ITravelPreferenceService
    {
        public TravelPreferenceService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<TravelPreferenceWithOptionsUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
