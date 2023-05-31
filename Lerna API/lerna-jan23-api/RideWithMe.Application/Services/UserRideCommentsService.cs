using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class UserRideCommentsService : BaseService<UserRideComment, UserRideCommentDto, UserRideCommentUpsertDto, BaseSearchObject, IUserRideCommentsRepository>, IUserRideCommentsService
    {
        public UserRideCommentsService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<UserRideCommentUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
