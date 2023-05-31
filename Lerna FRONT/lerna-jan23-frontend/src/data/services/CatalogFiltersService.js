import httpClient from "../../config/httpClient";

const baseName = "CatalogFilters";

const CatalogFiltersService = {
    getFilters: async ()=>{
        try{
            var response = await httpClient.get(`/${baseName}/GetFilters`);
            if(response){
                return response.data;
            }else{
                return null;
            }
        }catch{
            return null;
        }
    }
};
export default CatalogFiltersService;