using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class UserVehiclesService : BaseService<UserVehicle, UserVehicleDto, UserVehicleUpsertDto, UserVehicleSearchObject, IUserVehiclesRepository>, IUserVehiclesService
    {
        protected readonly ICurrentUser currentUser;

        public UserVehiclesService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<UserVehicleUpsertDto> validator, ICurrentUser currentUser) : base(mapper, unitOfWork, validator)
        {
            this.currentUser = currentUser;
        }

        public override async Task<PagedList<UserVehicleDto>> GetPagedAsync(UserVehicleSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            

            if (currentUser == null)
            {
                throw new UnauthorizedException();
            }

            searchObject.UserId = currentUser.Id.Value;
            var userVehicles = await CurrentRepository.GetPagedAsync(searchObject, cancellationToken);

            return Mapper.Map<PagedList<UserVehicleDto>>(userVehicles);
        }
    }
}
