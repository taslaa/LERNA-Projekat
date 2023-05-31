import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import ReportsService from "../../../../data/services/ReportsService";
import ReportTypesService from "../../../../data/services/ReportTypesService";
import UsersService from "../../../../data/services/UsersService";
import toastify from "../../../../utils/toastify/toastify";
import AuthService from "../../../../data/services/AuthService";

export default function ReportAddPage() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const [reportTypes, setReportTypes] = useState();
  const [users, setUsers] = useState();
  const [reporterUser, setReporterUser] = useState();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAndSetReportTypes = async () => {
      const reportTypesList = await ReportTypesService.getByParams({
        pageNumber : 1,
        pageSize : 9999
      });
      setReportTypes(reportTypesList.data.items);
    };
    fetchAndSetReportTypes();
    const fetchAndSetReporterUser = async () => {
      const response = await AuthService.getCurrentUser();
        if(response){
          setReporterUser(response);
        }
    };
    fetchAndSetReporterUser();
    const fetchAndSetReportedUser = async () =>{
      const reportedUsersList = await UsersService.getByParams({
        pageNumber : 1,
        pageSize : 9999
      });
      setUsers(reportedUsersList.data.items);
      };
      fetchAndSetReportedUser();
  }, []);

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    var apiModel = {reporterUserId : reporterUser.Id, ...data, typeId:data.reportTypeId};
    const newReport = await ReportsService.add(apiModel);
    setFormSubmitting(false);
    if (newReport) {
      navigate(`/admin/reports?reportTypeId=${newReport.reportTypeId}`);
      toastify.success(t("SUCCESSFULLY_ADDED_REPORT"));
    } else {
      toastify.error(t("ERROR_ADDING_REPORT"));
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">{t("NEW_REPORT")}</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">{t("REPORT_INFORMATION")}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="mb-3">
                <label className="form-label">{t("REPORT_TYPE")}</label>

                <select
                  {...register("reportTypeId", {
                    required: t("REPORT_TYPE_IS_REQUIRED"),
                  })}
                  className="form-control"
                >
                  <option value="">{t("CHOOSE_REPORT_TYPE")}</option>
                  {reportTypes &&
                    reportTypes.map((reportType, index) => (
                      <option key={index} value={reportType.id}>
                        {reportType.name}
                      </option>
                    ))}
                </select>
                {errors.reportTypeId && <span className="text-danger">{errors.reportTypeId.message}</span>}
              </div>

              <div className="mb-3">
                <label className="form-label">{t("NOTE")}</label>
                <input
                  {...register("note", {
                    required: t("NOTE_IS_REQUIRED"),
                  })}
                  type="text"
                  className="form-control"
                  placeholder={t("NOTE")}
                />
                {errors.note && <span className="text-danger">{errors.note.message}</span>}
              </div>   

              <div className="mb-3">
                <label className="form-label">{t("REPORTER_USER")}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("REPORTER_USER")}
                  disabled={true}
                  value={reporterUser?.FirstName +" " + reporterUser?.LastName}               />
              </div>               
              
              <div className="mb-3">
                <label className="form-label">{t("REPORTED_USER")}</label>

                <select
                  {...register("reportedUserId", {
                    required: t("REPORTED_USER_IS_REQUIRED"),
                  })}
                  className="form-control"
                >
                  <option value="">{t("CHOOSE_REPORTED_USER")}</option>
                  {users &&
                    users.map((user, index) => (
                      <option key={index} value={user.id}>
                        {user.firstName + user.lastName}
                      </option>
                    ))}
                </select>
                {errors.reportedUserId && <span className="text-danger">{errors.reportedUserId.message}</span>}

              </div>
              
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/reports")}>
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
