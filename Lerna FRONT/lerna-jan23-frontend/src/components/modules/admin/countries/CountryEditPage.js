import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import CountriesService from "../../../../data/services/CountriesService";
import toastify from "../../../../utils/toastify/toastify";

export default function CountryEditPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    const fetchCountryAndSetForm = async () => {
      const country = await CountriesService.getById(id);
      if (country.data) {
        reset(country.data);
      } else {
        navigate("/admin/countries");
      }
    };
    fetchCountryAndSetForm();
  }, []);

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const editedCountry = await CountriesService.edit({ id: id, ...data });
    setFormSubmitting(false);
    if (editedCountry) {
      navigate("/admin/countries");
      toastify.success(t("SUCCESSFULLY_EDITED_COUNTRY"));
    } else {
      toastify.error(t("ERROR_EDITING_COUNTRY"));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("EDIT_COUNTRY")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("COUNTRY_INFORMATION")}</h5>
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
              <div className="mb-3">
                <label className="form-label">{t("ABBREVIATION")}</label>
                <input
                  {...register("abbreviation", {
                    required: t("ABBREVIATION_IS_REQUIRED"),
                  })}
                  type="text"
                  className="form-control"
                  placeholder={t("ABBREVIATION")}
                />
                {errors.abbreviation && <span className="text-danger">{errors.abbreviation.message}</span>}
              </div>
              <div className="mb-3">
              <label className="form-label">{t("IS_ACTIVE")}</label>
                <div className="form-check form-switch form-check-md mb-0">
                  <input {...register("isActive")} className="form-check-input" type="checkbox" />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/countries")}>
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
