using AutoMapper;
using FluentValidation;
using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class UserTravelPreferenceOptionService : BaseService<UserTravelPreferenceOption, UserTravelPreferenceOptionDto, UserTravelPreferenceOptionUpsertDto, BaseSearchObject, IUserTravelPreferenceOptionRepository>, IUserTravelPreferenceOptionService
    {
        public UserTravelPreferenceOptionService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<UserTravelPreferenceOptionUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
