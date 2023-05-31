namespace RideWithMe.Core
{
    public class ReportUpsertDto : BaseUpsertDto
    {
        public string Note { get; set; } = null!;
        public ReportState ReportState { get; set; }

        public int TypeId { get; set; }

        public int ReportedUserId { get; set; }

        public int ReporterUserId { get; set; }
    }
}
