import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import CitiesService from "../../../../data/services/CitiesService";
import CountriesService from "../../../../data/services/CountriesService";
import toastify from "../../../../utils/toastify/toastify";

export default function CityEditPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();
  const [countries, setCountries] = useState();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    const setCountriesAndSetForm = async () => {
      const countriesList = await CountriesService.getByParams({pageNumber: 1, pageSize: 999});
      setCountries(countriesList.data.items);
      const city = await CitiesService.getById(id);
      console.log(city.data)
      if (city) {
        reset(city.data);
      } else {
        navigate("/admin/cities");
      }
    };
    setCountriesAndSetForm();
  }, []);

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const editedCity = await CitiesService.edit({ id: id, ...data });
    setFormSubmitting(false);
    if (editedCity) {
      navigate(`/admin/cities?countryId=${editedCity.countryId}`);
      toastify.success(t("SUCCESSFULLY_EDITED_CITY"));
    } else {
      toastify.error(t("ERROR_EDITING_CITY"));
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("EDIT_CITY")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("CITY_INFORMATION")}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("COUNTRY")}</label>
                <select
                  {...register("countryId", {
                    required: t("COUNTRY_IS_REQUIRED"),
                  })}
                  className="form-control"
                  defaultValue={getValues("countryId")}
                >
                  <option value="">{t("CHOOSE_COUNTRY")}</option>
                  {countries &&
                    countries.map((country, index) => (
                      <option key={index} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                </select>
                {errors.countryId && <span className="text-danger">{errors.countryId.message}</span>}
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
                <label className="form-label">{t("ZIP_CODE")}</label>
                <input
                  {...register("zipCode", {
                    required: t("ZIP_CODE_IS_REQUIRED"),
                  })}
                  type="text"
                  className="form-control"
                  placeholder={t("ZIP_CODE")}
                />
                {errors.zipCode && <span className="text-danger">{errors.zipCode.message}</span>}
              </div>
              <div className="mb-3">
              <label className="form-label">{t("IS_ACTIVE")}</label>
                <div className="form-check form-switch form-check-md mb-0">
                  <input {...register("isActive")} className="form-check-input" type="checkbox" />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/cities")}>
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
