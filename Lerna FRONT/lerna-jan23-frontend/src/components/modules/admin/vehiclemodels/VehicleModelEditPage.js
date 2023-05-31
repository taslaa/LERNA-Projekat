import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import VehicleBrandsService from "../../../../data/services/VehicleBrandsService";
import VehicleModelsService from "../../../../data/services/VehicleModelsService";
import toastify from "../../../../utils/toastify/toastify";
import EnumsService from "../../../../data/services/EnumsService";

export default function VehicleModelEditPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();
  const [vehicleBrands, setVehicleBrands] = useState();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const [vehicleTypes, setVehicleTypes] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    const setVehicleBrandsAndSetForm = async () => {
      const vehicleBrandsList = await VehicleBrandsService.getByParams({
        pageNumber: 1,
        pageSize: 9999
      });
      setVehicleBrands(vehicleBrandsList.data.items);
      const vehicleTypesList = await EnumsService.getVehicleTypes();
      setVehicleTypes(vehicleTypesList);
      const vehicleModel = await VehicleModelsService.getById(id);
      if (vehicleModel) {
        reset(vehicleModel.data);
      } else {
        navigate("/admin/vehiclemodels");
      }
    };
    setVehicleBrandsAndSetForm();
  }, []);

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const editedVehicleModel = await VehicleModelsService.edit({ id: id, ...data });
    setFormSubmitting(false);
    if (editedVehicleModel.isSuccess) {
      navigate(`/admin/vehiclemodels?vehicleBrandId=${editedVehicleModel.vehicleBrandId}`);
      toastify.success(t("SUCCESSFULLY_EDITED_VEHICLE_MODEL"));
    } else {
      toastify.error(t("ERROR_EDITING_VEHICLE_MODEL"));
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("EDIT_VEHICLE_MODEL")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("VEHICLE_MODEL_INFORMATION")}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("VEHICLE_BRAND")}</label>
                <select
                  {...register("vehicleBrandId", {
                    required: t("VEHICLE_BRAND_IS_REQUIRED"),
                  })}
                  className="form-control"
                  defaultValue={getValues("vehicleBrandId")}
                >
                  <option value="">{t("CHOOSE_VEHICLE_BRAND")}</option>
                  {vehicleBrands &&
                    vehicleBrands.map((vehicleBrand, index) => (
                      <option key={index} value={vehicleBrand.id}>
                        {vehicleBrand.name}
                      </option>
                    ))}
                </select>
                {errors.vehicleBrandId && <span className="text-danger">{errors.vehicleBrandId.message}</span>}
              </div>
              <div className="mb-3">
                <label className="form-label">{t("NAME")}</label>
                <input
                  {...register("name", {
                    required: t("NAME_IS_REQUIRED"),
                  })}
                  type="text"
                  className="form-control"
                  placeholder={t("NAME")}
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </div>
              <div className="mb-3">
                <label className="form-label">{t("VEHICLE_TYPE")}</label>

                <select
                  {...register("vehicleType", {
                    required: t("VEHICLE_TYPE_IS_REQUIRED"),
                  })}
                  className="form-control"
                >
                  <option value="">{t("CHOOSE_VEHICLE_TYPE")}</option>
                  {vehicleTypes &&
                    vehicleTypes.map((vehicleType, index) => (
                      <option key={index} value={vehicleType.id}>
                        {t(`VEHICLE_TYPE_${vehicleType.value.toUpperCase()}`)}
                      </option>
                    ))}
                </select>
                {errors.vehicleType && <span className="text-danger">{errors.vehicleType.message}</span>}
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/vehiclemodels")}>
                  {t("DISCARD")}
                </button>
                <button disabled={isFormSubmitting} type="submit" className="btn btn-primary">
                  {isFormSubmitting && <i className="fa fa-spin fa-spinner"></i>}
                  {t("SAVE")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
