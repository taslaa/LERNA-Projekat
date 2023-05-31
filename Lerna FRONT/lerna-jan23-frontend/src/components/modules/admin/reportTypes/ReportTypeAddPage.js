import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import ReportTypesService from "../../../../data/services/ReportTypesService";
import toastify from "../../../../utils/toastify/toastify";

export default function ReportTypeAddPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const newReportType = await ReportTypesService.add(data);
    setFormSubmitting(false);
    if (newReportType) {
      navigate("/admin/reportTypes");
      toastify.success(t("SUCCESSFULLY_ADDED_REPORT_TYPE"));
    } else {
      toastify.error(t("ERROR_ADDING_REPORT_TYPE"));
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("NEW_REPORT_TYPE")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("REPORT_TYPE_INFORMATION")}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("NAME")}</label>
                <input
                  {...register("name", {
                    required: t("NAME_IS_REQUIRED"),
                  })}
                  type="text"
                  className="form-control"
                  placeholder={t("Name")}
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/reportTypes")}>
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
