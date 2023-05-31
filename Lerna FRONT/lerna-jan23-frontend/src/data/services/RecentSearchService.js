import { httpSmartClient } from "../../config/httpClient";

const baseName = "RecentSearch";

const RecentSearchService =
{
    getByParams: async (params) => {
        var response = await httpSmartClient.getPaged(`/${baseName}/GetPaged`, { params });
        return response;
    },
    add: async (recentSearch) => {
        var response = await httpSmartClient.post(`/${baseName}`, recentSearch);
        return response;
    },
    delete: async (id) => {
        var response = await httpSmartClient.delete(`/${baseName}/` + id);
        return response;
    },
    deleteAll: async () => {
        var response = await httpSmartClient.delete(`/${baseName}`);
        return response;
    },
}
export default RecentSearchService;