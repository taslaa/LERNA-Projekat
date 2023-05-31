import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ConditionsService from "../../../../data/services/ConditionsService";
import toastify from "../../../../utils/toastify/toastify";
import ValidationErrors from "../../public/validator-messages/ValidationErrors";

export default function ConditionAddPage() {
  const { t } = useTranslation();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [apiErrors, setApiErrors] = useState();

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const newCondition = await ConditionsService.add(data);
    setFormSubmitting(false);

    if (newCondition.isSuccess) {
      navigate("/admin/conditions");
      toastify.success(t("SUCCESSFULLY_ADDED_CONDITION"))
    } else if (newCondition.isError) {
      toastify.error(t("ERROR_ADDING_CONDITION"));
    } else if (newCondition.isValidationError) {
      setApiErrors(newCondition.validationErrors);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("NEW_CONDITION")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("CONDITION_INFORMATION")}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("NAME")}</label>
                <input {...register("name", { required: t("NAME_IS_REQUIRED") })}
                  type="text"
                  className="form-control"
                  placeholder={t("Name")}
                />
              </div>
              {errors.name && <span className="text-danger">{errors.name.message}</span>}
              {apiErrors && apiErrors.length && <ValidationErrors errors={apiErrors}></ValidationErrors>}
              <div className="mb-3">
                <label className="form-label">{t("DESCRIPTION")}</label>
                <input {...register("description", { required: t("DESCRIPTION_IS_REQUIRED") })}
                  type="text"
                  className="form-control"
                  placeholder={t("DESCRIPTION")}
                />
              </div>
              {errors.description && <span className="text-danger">{errors.description.message}</span>}
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" >
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