import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import VehicleBrandsService from "../../../../data/services/VehicleBrandsService";
import toastify from "../../../../utils/toastify/toastify";
import ValidationErrors from "../../public/validator-messages/ValidationErrors";

export default function VehicleBrandAddPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [apiErrors, setApiErrors] = useState();

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const newVehicleBrandResponse = await VehicleBrandsService.add(data);
    setFormSubmitting(false);
    if (newVehicleBrandResponse.isSuccess) {
      navigate("/admin/vehicleBrands");
      toastify.success(t("SUCCESSFULLY_ADDED_VEHICLE_BRAND"));
    } else if (newVehicleBrandResponse.isError) {
      toastify.error(t(newVehicleBrandResponse.error));
    } else if (newVehicleBrandResponse.isValidationError) {
      setApiErrors(newVehicleBrandResponse.validationErrors);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("NEW_VEHICLE_BRAND")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("VEHICLE_BRAND_INFORMATION")}</h5>
          </div>
          <div className="card-body">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("NAME")}</label>
                <input
                  {...register("name", {
                    required: "Name is required"
                  })}
                  type="text"
                  className="form-control"
                  placeholder={t("Name")}
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
                {apiErrors && apiErrors.length && <ValidationErrors errors={apiErrors}></ValidationErrors>}
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/vehicleBrands")}>
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