using RideWithMe.Core;

namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IUsersRepository : IBaseRepository<User, int, UserSearchObject>
    {
        Task<User?> GetByEmailAsync(string email, CancellationToken cancellationToken = default);
        Task<IEnumerable<UserDto>> GetTopAsync(int count, CancellationToken cancellationToken = default);
        Task<int> GetCountByRoleAsync(Role role, CancellationToken cancellationToken = default);
    }
}
