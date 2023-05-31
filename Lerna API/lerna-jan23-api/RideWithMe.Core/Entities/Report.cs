namespace RideWithMe.Core
{
    public class Report : BaseEntity
    {
        public string Note { get; set; } = null!;
        public ReportState ReportState { get; set; }

        public int TypeId { get; set; }
        public ReportType ReportType { get; set; } = null!;

        public int ReporterUserId { get; set; }
        public User ReporterUser { get; set; } = null!;

        public int ReportedUserId { get; set; }
        public User ReportedUser { get; set; } = null!;
    }
}
