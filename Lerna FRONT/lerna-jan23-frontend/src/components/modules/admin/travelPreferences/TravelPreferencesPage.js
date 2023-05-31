import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TravelPreferencesService from "../../../../data/services/TravelPreferencesService";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import debounce from "lodash.debounce";
import ConfirmationDialog from "../../public/confirmation-dialog/ConfirmationDialog";
import PagingComponent from "../../../layout/components/PagingComponent";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";

export default function TravelPreferencesPage() {
  const [travelPreferences, setTravelPreferences] = useState();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [currentId, setCurrentId] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();
  var pagingSettings = getAppPagingSettings();
  const [pagingData, setPagingData] = useState(pagingSettings);
  const [data, setData] = useState([]);

  const fetchAndSetState = async (params) => {
    const travelPreferencesList = await TravelPreferencesService.getByParams({ pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize, ...params });
    setData(travelPreferencesList.data);
  };

  const onPageChange = (page) => {
    pagingData.pageNumber = page;
    setPagingData({ ...pagingData });
  }

  useEffect(() => {
    fetchAndSetState();
  }, [pagingData.pageNumber, pagingData.pageSize]);

  const handleDelete = (id) => {
    setShowConfirmationDialog(true);
    setCurrentId(id);
  };

  const deleteTravelPreference = async (id) => {
    const deleted = await TravelPreferencesService.delete(id);
    if (deleted.isSuccess) {
      window.location.reload(false);
      toastify.success(t("SUCCESSFULLY_DELETED_TRAVEL_PREFERENCE"));
      setShowConfirmationDialog(false);
    } else {
      toastify.error(t("ERROR_DELETING_TRAVEL_PREFERENCE"));
    }
  };

  const searchChange = (e) => fetchAndSetState({ name: e.target.value });


  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">{t("TRAVEL_PREFERENCES")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                + {t("NEW_TRAVEL_PREFERENCE")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body pb-0">
          <div className="mb-4">
            <input type="text" class="form-control" placeholder="Search" onChange={debounce(searchChange, 500)}></input>
          </div>
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NAME")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("OPTIONS")}</h6>
              </div>
              <div className="col">
                <h6 className="float-end mb-0">{t("ACTION")}</h6>
              </div>
            </div>
          </div>
          {(!data.items || data.items.length === 0) && (
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col text-center">{t("NO_RESULTS")}</div>
            </div>
          )}
          {data.items &&
            data.items.map((travelPreference, index) => (
              <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <div className="col">
                  <small className="d-block d-lg-none">{t("NAME")}:</small>
                  <h6 className="mb-0 fw-normal">{travelPreference.name}</h6>
                </div>

                <div className="col">
                  <small className="d-block d-lg-none">{t("OPTIONS")}:</small>
                  {travelPreference.travelPreferenceOptions.map((option, ind) => (<h6 key={ind} className="mb-0 fw-normal"> {option.name} </h6>))}
                </div>

                <div className="col">
                  <button className="btn btn-sm btn-danger float-end mb-0" onClick={() => handleDelete(travelPreference.id)}>
                    {t("DELETE")}
                  </button>
                  <button className="btn btn-sm btn-info float-end mb-0 me-2" onClick={() => navigate(`edit/${travelPreference.id}`)}>
                    {t("EDIT")}
                  </button>
                </div>
              </div>
            ))}
        </div>
        <PagingComponent
          currentPage={data.pageNumber ?? 0}
          itemsPerPage={data.pageSize ?? 0}
          totalRecords={data.totalCount ?? 0}
          onPageChange={onPageChange}
        ></PagingComponent>
      </div>
      {showConfirmationDialog && <ConfirmationDialog
        onDiscard={() => setShowConfirmationDialog(false)}
        title="Delete item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        confirmBtnLabel="Delete"
        onConfirm={() => deleteTravelPreference(currentId)}
      ></ConfirmationDialog>}
    </>
  );
}
