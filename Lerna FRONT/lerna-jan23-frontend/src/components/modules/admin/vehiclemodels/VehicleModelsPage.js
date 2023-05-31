import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import VehicleBrandsService from "../../../../data/services/VehicleBrandsService";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import VehicleModelsService from "../../../../data/services/VehicleModelsService";
import { useSearchParams } from "react-router-dom";
import EnumsService from "../../../../data/services/EnumsService";
import ConfirmationDialog from "../../public/confirmation-dialog/ConfirmationDialog";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";
import PagingComponent from "../../../layout/components/PagingComponent";

export default function VehicleModelsPage() {
  var pagingSettings = getAppPagingSettings();
  const [pagingData, setPagingData] = useState(pagingSettings);
  const [data, setData] = useState([]);
  const [vehicleBrands, setVehicleBrands] = useState();
  const [vehicleTypes, setVehicleTypes] = useState();
  const [vehicleBrandIdFilter, setVehicleBrandIdFilter] = useState("");
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [currentId, setCurrentId] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchAndSetVehicleBrands = async () => {
      const vehicleBrandsList = await VehicleBrandsService.getByParams({
        pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize
      });
      setVehicleBrands(vehicleBrandsList.data.items);
    };
    fetchAndSetVehicleBrands();
    const vehicleBrandId = searchParams.get("vehicleBrandId");
    if (vehicleBrandId) {
      setVehicleBrandIdFilter(vehicleBrandId);
      const fetchVehicleModelsByVehicleBrandId = async () => {
        const vehicleModelsByVehicleBrand = await VehicleModelsService.getByParams({
          pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize,
          vehicleBrandId: vehicleBrandId
        });
        setData(vehicleModelsByVehicleBrand.data);
      };
      fetchVehicleModelsByVehicleBrandId();
    }
    const fetchAndSetVehicleTypes = async () => {
      const vehicleTypesList = await EnumsService.getVehicleTypes();
      setVehicleTypes(vehicleTypesList);
    };
    fetchAndSetVehicleTypes();
  }, []);

  const onVehicleBrandChange = async (e) => {
    const vehicleBrandId = e.target.value;
    setVehicleBrandIdFilter(vehicleBrandId);
    setSearchParams({ vehicleBrandId: vehicleBrandId });
    if (vehicleBrandId) {
      const vehicleModelsByVehicleBrand = await VehicleModelsService.getByParams({
        pageNumber: 1,
        pageSize: 9999,
        vehicleBrandId: vehicleBrandId
      });
      setData(vehicleModelsByVehicleBrand.data);
    } else {
      setData({});
    }
  };
  const onPageChange = (page) => {
    pagingData.pageNumber = page;
    setPagingData({ ...pagingData });
  }

  const handleDelete = (id) => {
    setShowConfirmationDialog(true);
    setCurrentId(id);
  };

  const deleteVehicleModel = async (id) => {
    const deleted = await VehicleModelsService.delete(id);
    if (deleted.isSuccess) {
      window.location.reload(false);
      toastify.success(t("SUCCESSFULLY_DELETED_VEHICLE_MODEL"));
      setShowConfirmationDialog(false);
    } else {
      toastify.error(t("ERROR_DELETING_VEHICLE_MODEL"));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">{t("VEHICLE_MODELS")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create", { state: { vehicleBrandId: searchParams.get("vechileBrandId") } })}>
                + {t("NEW_VEHICLE_MODEL")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="mb-4">
            <select className="form-control" onChange={onVehicleBrandChange} value={vehicleBrandIdFilter}>
              <option value="">{t("CHOOSE_VEHICLE_BRAND")}</option>
              {vehicleBrands &&
                vehicleBrands.map((vehicleBrand, index) => (
                  <option key={index} value={vehicleBrand.id}>
                    {vehicleBrand.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NAME")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("VEHICLE_TYPE")}</h6>
              </div>
              <div className="col">
                <h6 className="float-end mb-0">{t("ACTION")}</h6>
              </div>
            </div>
          </div>
          {(!data.items || data.items.length === 0) && (
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col text-center">{vehicleBrandIdFilter ? t("NO_RESULTS") : t("PLEASE_CHOOSE_VEHICLE_BRAND_TO_SHOW")}</div>
            </div>
          )}
          {data.items &&
            data.items.map((vehicleModel, index) => (
              <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <div className="col">
                  <small className="d-block d-lg-none">{t("NAME")}:</small>
                  <h6 className="mb-0 fw-normal">{vehicleModel.name}</h6>
                </div>

                <div className="col">
                  <small className="d-block d-lg-none">{t("VEHICLE_TYPE")}:</small>
                  <h6 className="mb-0 fw-normal">{t(`VEHICLE_TYPE_${vehicleTypes.find(vt => vt.value == vehicleModel.vehicleType).value.toUpperCase()}`)}</h6>
                </div>
                <div className="col">
                  <button className="btn btn-sm btn-danger float-end mb-0" onClick={() => handleDelete(vehicleModel.id)}>
                    {t("DELETE")}
                  </button>
                  <button className="btn btn-sm btn-info float-end mb-0 me-2" onClick={() => navigate(`edit/${vehicleModel.id}`)}>
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
        onConfirm={() => deleteVehicleModel(currentId)}
      ></ConfirmationDialog>}
    </>
  );
}
