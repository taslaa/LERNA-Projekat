using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Core.Dtos;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class RidesService : BaseService<Ride, RideDto, RideUpsertDto, RideSearchObject, IRidesRepository>, IRidesService
    {
        private readonly ICurrentUser _currentUser;

        public RidesService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<RideUpsertDto> validator, ICurrentUser currentUser) : base(mapper, unitOfWork, validator)
        {
            _currentUser = currentUser;
        }

        public async Task<OverviewCountDto<int>> GetCountAsync(DateTime endDate, CancellationToken cancellationToken = default)
        {
            var count = await CurrentRepository.GetCountAsync(endDate, cancellationToken);
            return new OverviewCountDto<int> { Count = count };
        }

        public override async Task<RideDto> AddAsync(RideUpsertDto dto, CancellationToken cancellationToken = default)
        {
            await ValidateAsync(dto, cancellationToken);

            var ride = Mapper.Map<Ride>(dto);
            ride.DriverId = _currentUser.Id.Value;

            for (int i = 0; i < ride.Milestones.Count; i++)
            {
                RideMilestone? milestone = ride.Milestones[i];
                milestone.Order = i;
                milestone.Type = RideMilestoneType.Stop;
            }
            ride.Milestones.First().Type = RideMilestoneType.Start;
            ride.Milestones.Last().Type = RideMilestoneType.End;

            await CurrentRepository.AddAsync(ride, cancellationToken);
            await UnitOfWork.SaveChangesAsync(cancellationToken);
            return Mapper.Map<RideDto>(ride);
        }
    }
}
