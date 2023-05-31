import { httpSmartClient } from "../../config/httpClient";

const baseName = "VehicleModels";

const VehicleModelsService = {
  getById: async (id) => {
    var response = await httpSmartClient.getById(`/${baseName}/` + id);
    return response;
  },

  getByParams: async (params) => {
    var response = await httpSmartClient.getPaged(`/${baseName}/GetPaged`,{params});
    return response;
  },

  add: async (vehicleModel) => {
    var response = await httpSmartClient.post(`/${baseName}`, vehicleModel);
    return response;
  },

  edit: async (vehicleModel) => {
    var response = await httpSmartClient.put(`/${baseName}`, vehicleModel);
    return response;
  },

  delete: async (id) => {
    var response = await httpSmartClient.delete(`/${baseName}/` + id);
    return response;
  },
};

export default VehicleModelsService;
