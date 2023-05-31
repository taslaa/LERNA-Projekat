using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserRideCommentProfile : BaseProfile
    {
        public UserRideCommentProfile()
        {
            CreateMap<UserRideCommentDto, UserRideComment>().ReverseMap();

            CreateMap<UserRideCommentUpsertDto, UserRideComment>();
        }
    }
}
