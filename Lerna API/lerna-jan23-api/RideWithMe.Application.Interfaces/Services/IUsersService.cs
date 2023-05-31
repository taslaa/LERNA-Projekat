using RideWithMe.Core;
using RideWithMe.Core.Dtos;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IUsersService : IBaseService<int, UserDto, UserUpsertDto, UserSearchObject>
    {
        Task<UserSensitiveDto?> GetByEmailAsync(string email, CancellationToken cancellationToken = default);
        Task<IEnumerable<UserDto>> GetTopAsync(int size, CancellationToken cancellationToken = default);
        Task<OverviewCountDto<int>> GetCountByRoleAsync(Role role, CancellationToken cancellationToken = default);

        Task ToggleStatusAsync(int id, CancellationToken cancellationToken = default);
        Task<int> UpdateProfilePhotoAsync(UserUpsertDto dto, CancellationToken cancellationToken = default);
    }
}
