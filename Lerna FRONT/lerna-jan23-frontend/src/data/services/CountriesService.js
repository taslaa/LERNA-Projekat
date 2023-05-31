import { httpSmartClient } from "../../config/httpClient";

const baseName = "Countries";

const CountriesService = {
  getById: async (id) => {
    var respone=await httpSmartClient.getById(`/${baseName}/`+id);
    return respone;
  },

  getByParams: async (params) => {
    var respone=await httpSmartClient.getPaged(`/${baseName}/GetPaged`,{params});
    return respone;
  },

  add: async (country) => {
    var respone=await httpSmartClient.post(`/${baseName}`,country);
    return respone;
  },

  edit: async (country) => {
    var respone=await httpSmartClient.put(`/${baseName}`,country);
    return respone;
  },

  delete: async (id) => {
    var respone=await httpSmartClient.delete(`/${baseName}/`+id);
    return respone;
  },
};

export default CountriesService;
