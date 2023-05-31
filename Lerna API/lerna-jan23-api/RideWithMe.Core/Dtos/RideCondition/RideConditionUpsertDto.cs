namespace RideWithMe.Core
{
    public class RideConditionUpsertDto : BaseUpsertDto
    {
        public int RideId { get; set; }

        public int ConditionId { get; set; }
    }
}
