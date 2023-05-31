namespace RideWithMe.Core
{
    public class ReportDto : BaseDto
    {
        public string Note { get; set; } = null!;
        public ReportState ReportState { get; set; }

        public int TypeId { get; set; }
        public ReportTypeDto ReportType { get; set; } = null!;

        public int ReportedUserId { get; set; }
        public UserDto ReportedUser { get; set; } = null!;

        public int ReporterUserId { get; set; }
        public UserDto ReporterUser { get; set; } = null!;
    }
}
