namespace RideWithMe.Core
{
    public class RideCondition : BaseEntity
    {
        public int RideId { get; set; }
        public Ride Ride { get; set; } = null!;

        public int ConditionId { get; set; }
        public Condition Condition { get; set; } = null!;
    }
}
