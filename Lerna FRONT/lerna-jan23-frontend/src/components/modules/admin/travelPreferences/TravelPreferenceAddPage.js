import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import TravelPreferencesService from "../../../../data/services/TravelPreferencesService";
import toastify from "../../../../utils/toastify/toastify";
import { useFieldArray } from "react-hook-form";

export default function TravelPreferenceAddPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      travelPreferenceOptions: [{name:"option1"}]
    }});
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [apiErrors, setApiErrors] = useState();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, 
    name: "travelPreferenceOptions",
  });  

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    console.log(data);
    var newData=
    {
      name: data.name,
      travelPreferenceOptions: data.travelPreferenceOptions
    }
    console.log(newData);

    const newTravelPreferenceResponse = await TravelPreferencesService.add(newData);
    setFormSubmitting(false);
    if (newTravelPreferenceResponse.isSuccess) {
      navigate("/admin/travelPreferences");
      toastify.success(t("SUCCESSFULLY_ADDED_TRAVEL_PREFERENCE"));
    } else if (newTravelPreferenceResponse.isError) {
      toastify.error(t(newTravelPreferenceResponse.error));
    } else if (newTravelPreferenceResponse.isValidationError) {
      setApiErrors(newTravelPreferenceResponse.validationErrors);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("NEW_TRAVEL_PREFERENCE")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("TRAVEL_PREFERENCE_INFORMATION")}</h5>
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
              {fields.map((option,index) =>(
                              <div key={option.id} className="mb-3">
                              <label className="form-label">{t("OPTIONS")}</label>
                              <input
                                {...register(`travelPreferenceOptions.${index}.name`, {
                                  required: t("OPTIONS_ARE_REQUIRED"),
                                })}
                                type="text"
                                className="form-control"
                                placeholder={t("OPTIONS")}
                              />             
                               <button className="btn text-secondary border-0 me-2" onClick={() => remove(index)}>
                                  {t("DELETE_OPTION")}
                              </button>
                              {errors.options && <span className="text-danger">{errors.options.message}</span>}
                            </div>
              ))}              
              <div className="d-flex justify-content-end mt-4">
              <button className="btn text-secondary border-0 me-2" type="button" onClick={() => {append({ name: "newOption"});}}>
                  {t("APPEND_OPTION")}
                </button>
                <button className="btn text-secondary border-0 me-2" type="button" onClick={() => navigate("/admin/countries")}>
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
