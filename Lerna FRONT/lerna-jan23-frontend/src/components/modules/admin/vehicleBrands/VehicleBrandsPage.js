import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import VehicleBrandsService from "../../../../data/services/VehicleBrandsService";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import ConfirmationDialog from "../../public/confirmation-dialog/ConfirmationDialog";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";
import PagingComponent from "../../../layout/components/PagingComponent";

export default function VehicleBrandsPage() {
  var pagingSettings = getAppPagingSettings();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [pagingData, setPagingData] = useState(pagingSettings);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAndSetState = async () => {
      const vehicleBrandsList = await VehicleBrandsService.getByParams({pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize });
      setData(vehicleBrandsList.data);
    };
    fetchAndSetState();
  }, []);

  const onPageChange = (page) => {
    pagingData.pageNumber = page;
    setPagingData({...pagingData});
  }
  
  const handleDelete = (id) => {
    setShowConfirmationDialog(true);
    setCurrentId(id);
  };
  const deleteVehicleBrand = async (id) => {
    const deleted = await VehicleBrandsService.delete(id);
    if (deleted.isSuccess) {
      window.location.reload(false);
      toastify.success(t("SUCCESSFULLY_DELETED_VEHICLE_BRAND"));
      setShowConfirmationDialog(false);
    } else {
      toastify.error(t("ERROR_DELETING_VEHICLE_BRAND"));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">{t("VEHICLE_BRANDS")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                + {t("NEW_VEHICLE_BRAND")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body pb-0">
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NAME")}</h6>
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
          {data.items && data.items.map((vehicleBrand, index) => (
            <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col">
                <small className="d-block d-lg-none">{t("NAME")}:</small>
                <h6 className="mb-0 fw-normal">{vehicleBrand.name}</h6>
              </div>

              <div className="col-auto">
                <button className="btn btn-sm btn-info me-2" onClick={() => navigate(`edit/${vehicleBrand.id}`)}>
                  {t("EDIT")}
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(vehicleBrand.id)}>
                  {t("DELETE")}
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
        onConfirm={() => deleteVehicleBrand(currentId)}
      ></ConfirmationDialog>}
    </>
  );
}