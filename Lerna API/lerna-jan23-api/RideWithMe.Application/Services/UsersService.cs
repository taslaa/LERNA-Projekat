using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Core.Dtos;
using RideWithMe.Shared.Services;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class UsersService : BaseService<User, UserDto, UserUpsertDto, UserSearchObject, IUsersRepository>, IUsersService
    {
        private readonly ICryptoService _cryptoService;
        private readonly IValidator<UserChangePasswordDto> _passwordValidator;

        public UsersService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<UserUpsertDto> validator, IValidator<UserChangePasswordDto> passwordValidator, ICryptoService cryptoService) : base(mapper, unitOfWork, validator)
        {
            _cryptoService = cryptoService;
            _passwordValidator = passwordValidator;
        }

        public async Task<UserSensitiveDto?> GetByEmailAsync(string email, CancellationToken cancellationToken = default)
        {
            var user = await CurrentRepository.GetByEmailAsync(email, cancellationToken);
            return Mapper.Map<UserSensitiveDto>(user);
        }

        public override async Task<UserDto> AddAsync(UserUpsertDto dto, CancellationToken cancellationToken = default)
        {
            await ValidateAsync(dto, cancellationToken);

            var entity = Mapper.Map<User>(dto);

            entity.PasswordSalt = _cryptoService.GenerateSalt();
            entity.PasswordHash = _cryptoService.GenerateHash(dto.Password!, entity.PasswordSalt);

            if (dto.ProfilePhoto != null)
                entity.ProfilePhoto = Mapper.Map<Photo>(dto.ProfilePhoto);

            await CurrentRepository.AddAsync(entity, cancellationToken);
            await UnitOfWork.SaveChangesAsync(cancellationToken);
            return Mapper.Map<UserDto>(entity);
        }

        public async Task ToggleStatusAsync(int id, CancellationToken cancellationToken = default)
        {
            var user = await CurrentRepository.GetByIdAsync(id, cancellationToken);
            if (user == null)
                throw new UserNotFoundException();

            user.IsActive = !user.IsActive;

            await UnitOfWork.SaveChangesAsync(cancellationToken);
        }

        public async Task<int> UpdateProfilePhotoAsync(UserUpsertDto dto, CancellationToken cancellationToken = default)
        {
            var user = await CurrentRepository.GetByIdAsync(dto.Id.GetValueOrDefault(), cancellationToken);
            if (user == null)
                throw new UserNotFoundException();

            user.ProfilePhoto = Mapper.Map<Photo>(dto.ProfilePhoto);

            CurrentRepository.Update(user);
            await UnitOfWork.SaveChangesAsync(cancellationToken);

            return Mapper.Map<int>(user.ProfilePhotoId);
        }

        public async Task<IEnumerable<UserDto>> GetTopAsync(int count, CancellationToken cancellationToken = default)
        {
            var users = await CurrentRepository.GetTopAsync(count, cancellationToken);
            return Mapper.Map<IEnumerable<UserDto>>(users);
        }

        public async Task<OverviewCountDto<int>> GetCountByRoleAsync(Role role, CancellationToken cancellationToken = default)
        {
            var count = await CurrentRepository.GetCountByRoleAsync(role, cancellationToken);
            return new OverviewCountDto<int> { Count = count };
        }
        public override async Task<UserDto> UpdateAsync(UserUpsertDto dto, CancellationToken cancellationToken = default)
        {
            var user = await CurrentRepository.GetByIdAsync(dto.Id.Value, cancellationToken);
            if (user == null)
                throw new UserNotFoundException();

            var existingProfilePhotoId =  user.ProfilePhotoId;

            Mapper.Map(dto, user);

            if (!string.IsNullOrEmpty(dto.Password))
            {
                user.PasswordSalt = _cryptoService.GenerateSalt();
                user.PasswordHash = _cryptoService.GenerateHash(dto.Password, user.PasswordSalt);
            }

            if(dto.ProfilePhoto == null)
            {
                user.ProfilePhotoId = existingProfilePhotoId;
            }

            CurrentRepository.Update(user);
            await UnitOfWork.SaveChangesAsync(cancellationToken);

            return Mapper.Map<UserDto>(user);
        }

        public async Task ChangePassword(UserChangePasswordDto dto, CancellationToken cancellationToken)
        {
            await _passwordValidator.ValidateAsync(dto, cancellationToken);

            var user = await CurrentRepository.GetByIdAsync(dto.Id, cancellationToken);

            if (user == null)
                throw new UserNotFoundException();

            if (!_cryptoService.Verify(user.PasswordHash, user.PasswordSalt, dto.Password))
                throw new UserWrongCredentialsException();

            user.PasswordSalt = _cryptoService.GenerateSalt();
            user.PasswordHash = _cryptoService.GenerateHash(dto.NewPassword, user.PasswordSalt);

            CurrentRepository.Update(user);
            await UnitOfWork.SaveChangesAsync(cancellationToken);
        }
    }
}
