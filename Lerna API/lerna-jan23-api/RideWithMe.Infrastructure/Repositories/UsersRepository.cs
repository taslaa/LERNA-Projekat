using Microsoft.EntityFrameworkCore;

using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class UsersRepository : BaseRepository<User, int, UserSearchObject>, IUsersRepository
    {
        public UsersRepository(DatabaseContext databaseContext) : base(databaseContext)
        {

        }

        public async Task<User?> GetByEmailAsync(string email, CancellationToken cancellationToken = default)
        {
            return await DbSet.AsNoTracking().FirstOrDefaultAsync(u => u.Email == email, cancellationToken);
        }

        public override Task<PagedList<User>> GetPagedAsync(UserSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return DbSet
                .Where(u => searchObject.Query == null || (u.FirstName.ToLower().Contains(searchObject.Query.ToLower()) ||
                                                          u.LastName.ToLower().Contains(searchObject.Query.ToLower()) ||
                                                          u.Email.ToLower().Contains(searchObject.Query.ToLower()) ||
                                                          u.PhoneNumber.ToLower().Contains(searchObject.Query.ToLower())))
                .Where(u=>(searchObject.IsVerified == null || u.IsVerified == searchObject.IsVerified) &&
                          (searchObject.IsActive == null || u.IsActive == searchObject.IsActive))
                .ToPagedListAsync(searchObject, cancellationToken);
        }

        public async Task<IEnumerable<UserDto>> GetTopAsync(int count, CancellationToken cancellationToken = default)
        {
            return await DbSet
                .OrderByDescending(s => s.UserRides.Where(ur => ur.ReviewRating > 0).Average(ur => ur.ReviewRating))
                .Select(u => new UserDto
                {
                    Id = u.Id,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    Email = u.Email,
                    PhoneNumber = u.PhoneNumber,
                    Role = u.Role,
                    IsActive = u.IsActive,
                    IsVerified = u.IsVerified,
                    CreatedAt = u.CreatedAt,
                    LastSignInAt = u.LastSignInAt,
                    ProfilePhotoId = u.ProfilePhotoId,
                    RidesAverageRating = u.UserRides.Where(ur => ur.ReviewRating > 0).Average(ur => ur.ReviewRating),
                    RidesRatingCount = u.UserRides.Count(ur => ur.ReviewRating != 0),
                    ModifiedAt = u.ModifiedAt
                })
                .Where(u => u.RidesRatingCount > 0)
                .Take(count)
                .ToListAsync(cancellationToken);
        }

        public async Task<int> GetCountByRoleAsync(Role role, CancellationToken cancellationToken = default)
        {
            return await DbSet.Where(u => u.Role == role).CountAsync(cancellationToken);
        }
    }
}
