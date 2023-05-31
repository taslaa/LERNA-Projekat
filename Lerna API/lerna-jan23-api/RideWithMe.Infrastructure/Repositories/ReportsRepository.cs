using Microsoft.EntityFrameworkCore;
using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class ReportsRepository : BaseRepository<Report, int, ReportSearchObject>, IReportsRepository
    {
        public ReportsRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public async Task<int> GetCountByReportStateAsync(ReportState reportState, CancellationToken cancellationToken = default)
        {
            return await DbSet.Where(r => r.ReportState == reportState).CountAsync(cancellationToken);
        }

        public override Task<PagedList<Report>> GetPagedAsync(ReportSearchObject searchObject, CancellationToken cancellationToken = default)
        {
            return DbSet.Include(r=>r.ReporterUser)
                .Include(r=>r.ReportedUser).Include(r => r.ReportType)
                .Where(r => searchObject.ReportTypeId == null || r.TypeId == searchObject.ReportTypeId)
                .Where(r=> searchObject.ReportState == null || r.ReportState == searchObject.ReportState)
                .Where(r=> searchObject.ReporterUserId == null || r.ReporterUserId == searchObject.ReporterUserId)
                .Where(r=> searchObject.ReportedUserId == null || r.ReportedUserId == searchObject.ReportedUserId)
                .Where(r=> searchObject.Note == null || r.Note.ToLower().Contains(searchObject.Note.ToLower())).ToPagedListAsync(searchObject, cancellationToken);   

        }

       
    }
}