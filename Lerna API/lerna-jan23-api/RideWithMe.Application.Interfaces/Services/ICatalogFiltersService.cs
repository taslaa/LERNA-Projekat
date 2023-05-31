using RideWithMe.Core;

namespace RideWithMe.Application.Interfaces
{
    public interface ICatalogFiltersService
    {
        Task<CatalogFiltersDto> PrepareFilters(CancellationToken cancellationToken);
    }
}
