import httpClient, { httpSmartClient } from "../../config/httpClient";

const baseName = "UserRides";

const UserRidesService = {
    getTotalIncome: async () => {
      const response = await httpSmartClient.get(`/${baseName}/` + "TotalIncome");
      return response;
}
}

export default UserRidesService;
