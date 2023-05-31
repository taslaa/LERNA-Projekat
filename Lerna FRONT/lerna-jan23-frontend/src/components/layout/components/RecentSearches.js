import { useEffect, useState } from "react";
import AuthService from "../../../data/services/AuthService";
import RecentSearchService from "../../../data/services/RecentSearchService";

export default function RecentSearches() {
    const [recentSearch, setRecentSearch] = useState();
    const hasRecentSearches = recentSearch && recentSearch.length > 0;

    const fetchAndSet = async (params) => {
        const listSearch = await RecentSearchService.getByParams({ pageNumber: 1, pageSize: 999, ...params })
        setRecentSearch(listSearch.data.items);
    }

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        const id = user.Id;
        fetchAndSet({ UserId: id });
    }, [])

    const deleteSearch = async (id) => {
        const deleted = await RecentSearchService.delete(id);

        if (deleted) {
            const currentSearch = [...recentSearch];
            const index = currentSearch.findIndex((c) => c.id === id);
            currentSearch.splice(index, 1);
            setRecentSearch(currentSearch);
        }
    }

    const deleteAll = async () => {
        const deleted = await RecentSearchService.deleteAll();
        if (deleted)
            window.location.reload(false);
    }
    return (
        <>
            {hasRecentSearches &&
                <div className="row mt-4">
                    <div className="col-2"></div>
                    <div className="col-auto">
                        <h4>Recent<br/>Searches</h4>
                    </div>
                    <div className="col">
                            {recentSearch && recentSearch.map((search, index) =>
                            (
                                <button type="button" class="btn btn-light m-1">
                                  {search.name} <span class="badge badge-warning"  onClick={() => deleteSearch(search.id)}>X</span>
                                </button>
                            ))}
                        <button type="button" class="btn btn-light m-1" onClick={() => deleteAll()} >
                            Clear All 
                        </button>
                           
                    </div>
                </div>
            }
        </>
    );
}