using RideWithMe.Core;

namespace RideWithMe
{
    public class ReportType : BaseEntity
    {
        public string Name { get; set; } = null!;

        public ICollection<Report> Reports { get; set; } = null!;
    }
}
