import {httpSmartClient} from "../../config/httpClient";

const baseName = "Photos";

const PhotosService = {
  getById: async (id) => {
    var response = await httpSmartClient.getById(`/${baseName}/` + id);
    return response;
  },

};

export default PhotosService;
