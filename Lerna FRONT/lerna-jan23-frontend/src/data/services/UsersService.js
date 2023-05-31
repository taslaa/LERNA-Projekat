import { httpSmartClient } from "../../config/httpClient";

const baseName = "Users";

const UsersService = {
  getByParams: async (params) => {
    var response = await httpSmartClient.getPaged(`/${baseName}/GetPaged`, { params });
    return response;
  },

  getTotalUsers: async () => {
    var response = await httpSmartClient.get(`/${baseName}/` + "GetCountByRole?role=User");
    return response;
  },

  getTopUsers: async (count) => {
    var response = await httpSmartClient.get(`/${baseName}/GetTop?size=${count}`);
    return response;
  },

  getById: async (id) => {
    var response = await httpSmartClient.getById(`/${baseName}/` + id);
    return response;
  },

  addUserWithPhoto: async (user) => {
    var response = await httpSmartClient.postForm(`/${baseName}/AddUserWithPhoto`, user);
    return response;
  },

  toggleStatus: async (id) => {
    var response = await httpSmartClient.put(`/${baseName}/ToggleStatus?id=` + id);
    return response;
  },

  updateUserInformation: async (newInformation) => {
    var response = await httpSmartClient.putForm(`/${baseName}/UpdateUserInformation`, newInformation);
    return response;
  },

  updateUserProfilePhoto: async (newPhoto) => {
    var response = await httpSmartClient.putForm(`/${baseName}/UpdateProfilePhoto`, newPhoto);
    return response;
  },

  add: async (user) => {
    var response = await httpSmartClient.postForm(`/${baseName}/`, user);
    return response;
  },

  edit: async (user) => {
    var response = await httpSmartClient.putForm(`/${baseName}`, user);
    return response;
  },
  delete: async (id) => {
    var response = await httpSmartClient.delete(`/${baseName}/`+id);
    return response;
  },

  updatePassword: async(passwordDto) => {
    var response = await httpSmartClient.put(`/${baseName}/ChangePassword`, passwordDto);
    return response;
  }
}

export default UsersService;