using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class PhotosService : BaseService<Photo, PhotoDto, PhotoUpsertDto, BaseSearchObject, IPhotosRepository>, IPhotosService
    {
        public PhotosService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<PhotoUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {
        }
    }
}
