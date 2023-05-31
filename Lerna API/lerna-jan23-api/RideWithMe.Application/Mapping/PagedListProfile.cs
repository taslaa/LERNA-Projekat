using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class PagedListProfile : BaseProfile
    {
        public PagedListProfile()
        {
            CreateMap(typeof(PagedList<>), typeof(PagedList<>));
        }
    }
}
