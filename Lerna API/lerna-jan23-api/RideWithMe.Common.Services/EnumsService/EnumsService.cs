using RideWithMe.Core;

namespace RideWithMe.Common.Services
{
    public class EnumsService : IEnumsService
    {
        public Task<IEnumerable<KeyValuePair<int, string>>> GetRolesAsync() => Task.FromResult(GetValues<Role>());

        public Task<IEnumerable<KeyValuePair<int, string>>> GetVehicleTypesAsync() => Task.FromResult(GetValues<VehicleType>());

        public Task<IEnumerable<KeyValuePair<int, string>>> GetPaymentTypesAsync() => Task.FromResult(GetValues<PaymentType>());
        public Task<IEnumerable<KeyValuePair<int, string>>> GetCommunicationTypesAsync() => Task.FromResult(GetValues<CommunicationType>());

        public Task<IEnumerable<KeyValuePair<int, string>>> GetReportStatesAsync() => Task.FromResult(GetValues<ReportState>());

        public Task<IEnumerable<KeyValuePair<int, string>>> GetRideMilestoneTypesAsync() => Task.FromResult(GetValues<RideMilestoneType>());
        public Task<IEnumerable<KeyValuePair<int, string>>> GetGenders() => Task.FromResult(GetValues<Gender>());


        private IEnumerable<KeyValuePair<int, string>> GetValues<T>() where T : Enum
        {
            return Enum.GetValues(typeof(T))
                       .Cast<int>()
                       .Select(e => new KeyValuePair<int, string>(e, Enum.GetName(typeof(T), e)!));
        }
    }
}
