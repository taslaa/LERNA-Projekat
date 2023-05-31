namespace RideWithMe.Core
{
    public class ConditionUpsertDto : BaseUpsertDto
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }
}
