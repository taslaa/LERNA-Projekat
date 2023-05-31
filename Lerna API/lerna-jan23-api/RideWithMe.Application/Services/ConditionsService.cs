using AutoMapper;
using FluentValidation;
using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class ConditionsService : BaseService<Condition, ConditionDto, ConditionUpsertDto, ConditionSearchObject, IConditionsRepository>, IConditionsService
    {
        public ConditionsService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<ConditionUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }

        public async Task<IEnumerable<ConditionDto>> GetAll(CancellationToken cancellationToken = default)
        {
            var conditions = await CurrentRepository.GetAll(cancellationToken);

            return Mapper.Map<IEnumerable<ConditionDto>>(conditions);
        }
    }
}
