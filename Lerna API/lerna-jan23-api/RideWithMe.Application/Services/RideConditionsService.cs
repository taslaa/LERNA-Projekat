using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class RideConditionsService : BaseService<RideCondition, RideConditionDto, RideConditionUpsertDto, BaseSearchObject, IRideConditionsRepository>, IRideConditionsService
    {
        public RideConditionsService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<RideConditionUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
