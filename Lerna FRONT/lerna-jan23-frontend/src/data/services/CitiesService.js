import { httpSmartClient } from "../../config/httpClient";

const baseName = "Cities";

const CitiesService = {
  getById: async (id) => {
    var response = await httpSmartClient.getById(`/${baseName}/` + id);
    return response;
  },
  getByCountryId: async (countryId) => {
    const response = await httpSmartClient.getById(`/${baseName}/ByCountry`, {params: {countryId}});
    return response;
  },
  getPaged: async (params) => {
    var response = await httpSmartClient.getPaged(`/${baseName}/GetPaged`, { params });
    return response;
  },
  add: async (city) => {
    var response = await httpSmartClient.post(`/${baseName}/`, city);
    return response;
  },
  edit: async (city) => {
    var response = await httpSmartClient.put(`/${baseName}`, city);
    return response;
  },
  delete: async (id) => {
    var response = await httpSmartClient.delete(`/${baseName}/` + id);
    return response;
  },
};

export default CitiesService;
