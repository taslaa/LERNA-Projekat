import httpClient from "../../config/httpClient";

const baseName = "Enums";

const EnumsService = {
  getRoles: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/roles`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  getVehicleTypes: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/vehicle-types`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  getReportStates: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/report-states`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },
  getGenders: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/genders`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  getPaymentTypes: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/payment-types`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  getCommunicationTypes: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/communication-types`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  getRideMilestoneTypes: async () => {
    try {
      const response = await httpClient.get(`/${baseName}/rideMilestone-types`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

};
export default EnumsService;
