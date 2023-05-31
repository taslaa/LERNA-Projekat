using AutoMapper;
using FluentValidation;
using RideWithMe.Application.Interfaces;
using RideWithMe.Core;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class RecentSearchService : BaseService<RecentSearch, RecentSearchDto, RecentSearchUpsertDto, RecentSearchObject, IRecentSearchRepository>, IRecentSearchService
    {
        protected readonly ICurrentUser currentUser;

        public RecentSearchService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<RecentSearchUpsertDto> validator, ICurrentUser _currentUser) : base(mapper, unitOfWork, validator)
        {
            this.currentUser = _currentUser;
        }

        public async Task DeleteAll()
        {
            if (currentUser == null)
            {
                throw new UnauthorizedAccessException();
            }

            await CurrentRepository.DeleteByUserIdAsync(currentUser.Id.Value);
            await UnitOfWork.SaveChangesAsync();
        }
    }
}
