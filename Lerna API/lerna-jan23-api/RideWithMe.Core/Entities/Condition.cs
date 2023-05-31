namespace RideWithMe.Core
{
    public class Condition : BaseEntity
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }

        public ICollection<RideCondition> Rides { get; set; } = null!;
    }
}