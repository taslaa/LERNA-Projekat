using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class RideMilestonesService : BaseService<RideMilestone, RideMilestoneDto, RideMilestoneUpsertDto, BaseSearchObject, IRideMilestonesRepository>, IRideMilestonesService
    {
        public RideMilestonesService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<RideMilestoneUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
