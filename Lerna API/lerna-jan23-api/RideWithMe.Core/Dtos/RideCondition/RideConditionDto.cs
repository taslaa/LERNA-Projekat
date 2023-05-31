namespace RideWithMe.Core
{
    public class RideConditionDto : BaseDto
    {
        public int RideId { get; set; }
        public RideDto Ride { get; set; } = null!;

        public int ConditionId { get; set; }
        public ConditionDto Condition { get; set; } = null!;
    }
}
