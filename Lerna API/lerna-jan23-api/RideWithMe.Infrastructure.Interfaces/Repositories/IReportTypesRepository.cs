
namespace RideWithMe.Infrastructure.Interfaces
{
    public interface IReportTypesRepository : IBaseRepository<ReportType, int, ReportTypeSearchObject>
    {
        Task<bool> DoesExistAsync(string name, CancellationToken cancellationToken = default);
    }
}
