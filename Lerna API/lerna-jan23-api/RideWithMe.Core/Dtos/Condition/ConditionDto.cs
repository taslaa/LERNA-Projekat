namespace RideWithMe.Core
{
    public class ConditionDto : BaseDto
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }
}
