namespace RideWithMe.Common.Services
{
    public interface IEnumsService
    {
        Task<IEnumerable<KeyValuePair<int, string>>> GetVehicleTypesAsync();
        Task<IEnumerable<KeyValuePair<int, string>>> GetPaymentTypesAsync();
        Task<IEnumerable<KeyValuePair<int, string>>> GetCommunicationTypesAsync();
        Task<IEnumerable<KeyValuePair<int, string>>> GetRideMilestoneTypesAsync();
        Task<IEnumerable<KeyValuePair<int, string>>> GetReportStatesAsync();
        Task<IEnumerable<KeyValuePair<int, string>>> GetRolesAsync();
        Task<IEnumerable<KeyValuePair<int, string>>> GetGenders();

    }
}