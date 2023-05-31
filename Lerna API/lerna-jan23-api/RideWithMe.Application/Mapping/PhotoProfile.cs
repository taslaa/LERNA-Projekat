using Microsoft.AspNetCore.Http;
using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class PhotoProfile : BaseProfile
    {
        public PhotoProfile()
        {
            CreateMap<PhotoDto, Photo>().ReverseMap();

            CreateMap<PhotoUpsertDto, Photo>();

            CreateMap<IFormFile, Photo>().ReverseMap();

            CreateMap<IFormFile, PhotoUpsertDto>().ReverseMap();

        }
    }
}
