import axios from "axios";

const baseURL = "https://localhost:7111/api";
const httpClient = axios.create({
  baseURL: baseURL,
});

httpClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


const handleApiResponse = function (httpResponse) {
  if (httpResponse.status >= 200 && httpResponse.status < 300) {
    return {
      isSuccess: true,
      isError: false,
      isValidationError: false,
      data: httpResponse.data,
      error: null,
      validationErrors: null
    }
  }
}


const handleExceptionApiResponse = function (axiosError) {
  console.log(axiosError);
  if (axiosError.response.status == 400) {
    return {
      isSuccess: false,
      isError: false,
      isValidationError: true,
      data: null,
      error: null,
      validationErrors: axiosError.response.data.errors
    }
  }
  else {
    return {
      isSuccess: false,
      isError: true,
      isValidationError: false,
      data: null,
      error: "INTERNAL_SERVER_ERROR",
      validationErrors: null
    }
  }
}

const api = (axios) => {
  const baseUrl = baseURL;
  return {
    getPhotoUrl: (photoId, config = {}) => {
      return baseURL + "/Photos/" + photoId;
    },
    get: async (url, config = {}) => {
      try {
        var response = await axios.get(baseUrl + url, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    getById: async (url, config = {}) => {
      try {
        var response = await axios.get(baseUrl + url, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    get: async (url, config = {}) => {
      try {
        var response = await axios.get(baseUrl + url, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    delete: async (url, config = {}) => {
      try {
        var response = await axios.delete(baseUrl + url, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    put: async (url, body, config = {}) => {
      try {
        var response = await axios.put(baseUrl + url, body, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    putForm: async (url, body, config = {}) => {
      try {
        var response = await axios.putForm(baseUrl + url, body, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    post: async (url, body, config = {}) => {
      try {
        var response = await axios.post(baseUrl + url, body, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    postForm: async (url, body, config = {}) => {
      try {
        var response = await axios.postForm(baseUrl + url, body, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
    getPaged: async (url, searchObject = {}, config = {}) => {
      try {
        var response = await axios.get(baseUrl + url, searchObject, config);
        return handleApiResponse(response);
      } catch (e) {
        return handleExceptionApiResponse(e);
      }
    },
  };
};

export const httpSmartClient = api(httpClient);

export default httpClient;
