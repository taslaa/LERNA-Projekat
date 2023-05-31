import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CountriesService from "../../../../data/services/CountriesService";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import PagingComponent from "../../../layout/components/PagingComponent";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";
import ConfirmationDialog from "../../public/confirmation-dialog/ConfirmationDialog";

export default function CountriesPage() {
  var pagingSettings = getAppPagingSettings();
  const [pagingData, setPagingData] = useState(pagingSettings);
  const [data, setData] = useState([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [currentId, setCurrentId] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAndSetState = async () => {
      const countriesList = await CountriesService.getByParams({ pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize});
      setData(countriesList.data);
    };
    fetchAndSetState();
  }, [pagingData.pageNumber, pagingData.pageSize]);

  const onPageChange = (page) => {
    pagingData.pageNumber = page;
    setPagingData({ ...pagingData });
  }

  const handleDelete = (id) => {
    setShowConfirmationDialog(true);
    setCurrentId(id);
  };

  const deleteCountry = async (id) => {
    const deleted = await CountriesService.delete(id);
    if (deleted.isSuccess) {
      window.location.reload(false);
      toastify.success(t("SUCCESSFULLY_DELETED_COUNTRY"));
      setShowConfirmationDialog(false);
    } else {
      toastify.error(t("ERROR_DELETING_COUNTRY"));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">{t("COUNTRIES")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                + {t("NEW_COUNTRY")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NAME")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("ABBREVIATION")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("STATUS")}</h6>
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
            data.items.map((country, index) => (
              <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <div className="col">
                  <small className="d-block d-lg-none">{t("NAME")}:</small>
                  <h6 className="mb-0 fw-normal">{country.name}</h6>
                </div>

                <div className="col">
                  <small className="d-block d-lg-none">{t("ABBREVIATION")}:</small>
                  <h6 className="mb-0 fw-normal">{country.abbreviation}</h6>
                </div>
                <div className="col">
                  <small className="d-block d-lg-none">{t("STATUS")}:</small>
                  <div className={`badge bg-opacity-10 ${country.isActive ? "bg-success text-success" : "bg-danger text-danger"}`}>{country.isActive ? "Active" : "Inactive"}</div>
                </div>

                <div className="col">
                  <button className="btn btn-sm btn-danger float-end mb-0" onClick={() => handleDelete(country.id)}>
                    {t("DELETE")}
                  </button>
                  <button className="btn btn-sm btn-info float-end mb-0 me-2" onClick={() => navigate(`edit/${country.id}`)}>
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
        onConfirm={() => deleteCountry(currentId)}
      ></ConfirmationDialog>}
    </>
  );
}
