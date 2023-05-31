import { httpSmartClient } from "../../config/httpClient";

const baseName = "TravelPreference";

const TravelPreferencesService = {
  getById: async (id) => {
    const response = await httpSmartClient.getById(`/${baseName}/` + id);
    return response;
  },

  getByParams: async (params) => {
      const response = await httpSmartClient.getPaged(`/${baseName}/GetPaged`, { params });
      return response;
  },

  add: async (travelPreference) => {
    const response = await httpSmartClient.post(`/${baseName}`, travelPreference);
    return response;
  },

  edit: async (travelPreference) => {
    const response = await httpSmartClient.put(`/${baseName}`, travelPreference);
    return response;
  },

  delete: async (id) => {
    const response = await httpSmartClient.delete(`/${baseName}/` + id);
    return response;
  },
};

export default TravelPreferencesService;
