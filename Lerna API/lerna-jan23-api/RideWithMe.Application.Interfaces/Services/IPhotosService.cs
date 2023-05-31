using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IPhotosService : IBaseService<int, PhotoDto, PhotoUpsertDto, BaseSearchObject>
    {
    }
}
