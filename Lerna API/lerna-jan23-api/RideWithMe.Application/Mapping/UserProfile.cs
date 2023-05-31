using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserProfile : BaseProfile
    {
        public UserProfile()
        {
            CreateMap<UserDto, User>().ReverseMap();

            CreateMap<User, UserSensitiveDto>();

            CreateMap<UserDto, UserUpsertDto>();

            CreateMap<UserUpsertDto, User>()
                .ForMember(u => u.Role, o => o.Condition(s => s.Role != null))
                .ForMember(u => u.IsVerified, o => o.Condition(s => s.IsVerified != null))
                .ForMember(u => u.IsActive, o => o.Condition(s => s.IsActive != null));
        }
    }
}
