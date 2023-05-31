import httpClient, {httpSmartClient} from "../../config/httpClient";

const baseName = "Rides";

const RidesService = {
  getCount: async (dateTime) => {
    var response = await httpSmartClient.get(`/${baseName}/` + "Count?dateTime=" + dateTime);
    return response;

  },
  getById: async (id) => {
    var response = await httpSmartClient.getById(`/${baseName}/` + id);
    return response;
  },

  getByParams: async () => {
    var response = await httpSmartClient.getPaged(`/${baseName}/GetPaged`);
    return response.data.items;
  },

  add: async (ride) => {
    var response = await httpSmartClient.post(`/${baseName}`, ride);
    return response;
  },

  edit: async (ride) => {
    var response = await httpSmartClient.put(`/${baseName}`, ride);
    return response;
  },

  delete: async (id) => {
    var response = await httpSmartClient.delete(`/${baseName}/` + id);
    return response;
  }

};

export default RidesService;
