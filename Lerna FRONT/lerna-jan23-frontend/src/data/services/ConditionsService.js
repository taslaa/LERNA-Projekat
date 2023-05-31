import { httpSmartClient } from "../../config/httpClient";

const baseName = "Conditions";

const ConditionsService = {
    getById: async (id) => {
       var response=await httpSmartClient.getById(`/${baseName}/`+id);
       return response;
    },

    getByParams: async (params) => {
        var response=await httpSmartClient.getPaged(`/${baseName}/GetPaged`,{params});
        return response;
    },

    add: async (condition) => {
        var response=await httpSmartClient.post(`/${baseName}`,condition);
        return response;
    },

    edit: async (condition) => {
        var response=await httpSmartClient.put(`/${baseName}`,condition);
        return response;
    },

    delete: async (id) => {
        var response=await httpSmartClient.delete(`/${baseName}/`+id);
        return response;
    },
}

export default ConditionsService;