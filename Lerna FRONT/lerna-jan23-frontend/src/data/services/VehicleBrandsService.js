import {httpSmartClient} from "../../config/httpClient";

const baseName = "VehicleBrands";

const VehicleBrandsService = {
  getById: async (id) => {
    var response = await httpSmartClient.getById(`/${baseName}/` + id);
    return response;
  },

  getByParams: async (params) => {
    var response = await httpSmartClient.getPaged(`/${baseName}/GetPaged`,{params});
    return response;
  },

  add: async (vehicleBrand) => {
    var response = await httpSmartClient.post(`/${baseName}`, vehicleBrand);
    return response;
  },

  edit: async (vehicleBrand) => {
    var response = await httpSmartClient.put(`/${baseName}`, vehicleBrand);
    return response;
  },

  delete: async (id) => {
    var response = await httpSmartClient.delete(`/${baseName}/` + id);
    return response;
  }
};

export default VehicleBrandsService;
