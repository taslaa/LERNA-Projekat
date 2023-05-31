import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ReportsService from "../../../../data/services/ReportsService";
import ReportTypesService from "../../../../data/services/ReportTypesService";
import UsersService from "../../../../data/services/UsersService";
import EnumsService from "../../../../data/services/EnumsService";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import debounce from "lodash.debounce";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";
import PagingComponent from "../../../layout/components/PagingComponent";
import ConfirmationDialog from "../../public/confirmation-dialog/ConfirmationDialog";

export default function ReportsPage() {
  var pagingSettings = getAppPagingSettings();
  const [pagingData, setPagingData] = useState(pagingSettings);
  const [data, setData] = useState([]);
  const [reportStates, setReportStates] = useState();
  const [reportTypes, setReportTypes] = useState();
  const [users, setUsers] = useState();
  const [currentId, setCurrentId] = useState();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [selectedReportStateFilter, setSelectedReportStateFilter] = useState(null);
  const [selectedReportTypeIdFilter, setSelectedReportTypeIdFilter] = useState(null);
  const [selectedReporterUserIdFilter, setSelectedReporterUserIdFilter] = useState(null);
  const [selectedReportedUserIdFilter, setSelectedReportedUserIdFilter] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const fetchReports = async (params) => {
    const reports = await ReportsService.getByParams({
      pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize, ...params
    });

    setData(reports.data);
  };

  const onPageChange = (page) => {
    pagingData.pageNumber = page;
    setPagingData({ ...pagingData });
  }

  const handleDelete = (id) => {
    setShowConfirmationDialog(true);
    setCurrentId(id);
  };

  useEffect(() => {
    const fetchAndSetReportTypes = async () => {
      const reportTypesList = await ReportTypesService.getByParams({
        pageNumber: 1,
        pageSize: 9999
      });
      setReportTypes(reportTypesList.data.items);
    };
    fetchAndSetReportTypes();

    const fetchAndSetReportStates = async () => {
      const reportStatesList = await EnumsService.getReportStates();
      setReportStates(reportStatesList);
    };
    fetchAndSetReportStates();

    const fetchAndSetUsers = async () => {
      const usersList = await UsersService.getByParams({
        pageNumber: 1,
        pageSize: 9999
      });
      setUsers(usersList.data.items);
    };
    fetchAndSetUsers()


    fetchReports({});
  }, []);

  useEffect(() => {
    fetchReports({
      reportTypeId: selectedReportTypeIdFilter,
      reportState: selectedReportStateFilter,
      reporterUserId: selectedReporterUserIdFilter,
      reportedUserId: selectedReportedUserIdFilter
    });
  }, [selectedReportStateFilter, selectedReportTypeIdFilter, selectedReporterUserIdFilter, selectedReportedUserIdFilter])

  const onReportTypeChange = async (e) => {
    const reportTypeId = e.target.value;
    setSelectedReportTypeIdFilter(reportTypeId);
  };
  const onReportStateChange = (e) => {
    setSelectedReportStateFilter(e.target.value);
  };
  const onReporterUserIdChange = (e) => {
    setSelectedReporterUserIdFilter(e.target.value);
  };
  const onReportedUserIdChange = (e) => {
    setSelectedReportedUserIdFilter(e.target.value);
  };
  const searchChange = (e) => fetchReports({ note: e.target.value });

  const deleteReport = async (id) => {
    const deleted = await ReportsService.delete(id);
    if (deleted.isSuccess) {
      window.location.reload(false);
      toastify.success(t("SUCCESSFULLY_DELETED_REPORT"));
    } else {
      toastify.error(t("ERROR_DELETING_REPORT"));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <h1 className="h3 mb-3 mb-sm-0">{t("REPORTS")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create", { state: {} })}>
                + {t("NEW_REPORT")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="row mb-4">
            <div className="col">
              <label className="form-label">{t("NOTE")}</label>
              <input type="text" class="form-control" placeholder="Search note" onChange={debounce(searchChange, 500)}></input>
            </div>
            <div className="col">
              <label className="form-label">{t("REPORT_STATE")}</label>

              <select
                className="form-control"
                onChange={onReportStateChange}
              >
                <option value="">{t("CHOOSE_REPORT_STATE")}</option>
                {reportStates &&
                  reportStates.map((reportState, index) => (
                    <option key={index} value={reportState.key}>
                      {reportState.value}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col">
              <label className="form-label">{t("REPORTER_USER")}</label>

              <select
                className="form-control"
                onChange={onReporterUserIdChange}
                value={selectedReporterUserIdFilter}
              >
                <option value="">{t("CHOOSE_REPORTER_USER")}</option>
                {users &&
                  users.map((user, index) => (
                    <option key={index} value={user.id}>
                      {user.firstName + " " + user.lastName}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col">
              <label className="form-label">{t("REPORTED_USER")}</label>

              <select
                className="form-control"
                onChange={onReportedUserIdChange}
                value={selectedReportedUserIdFilter}
              >
                <option value="">{t("CHOOSE_REPORTED_USER")}</option>
                {users &&
                  users.map((user, index) => (
                    <option key={index} value={user.id}>
                      {user.firstName + " " + user.lastName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col">
              <label className="form-label">{t("REPORT_TYPE")}</label>
              <select className="form-control" onChange={onReportTypeChange} value={selectedReportTypeIdFilter}>
                <option value="">{t("CHOOSE_REPORT_TYPE")}</option>
                {reportTypes &&
                  reportTypes.map((reportType, index) => (
                    <option key={index} value={reportType.id}>
                      {reportType.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NOTE")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("REPORT_STATE")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("REPORTER_USER")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("REPORTED_USER")}</h6>
              </div>
              <div className="col">
                <h6 className="float-end mb-0">{t("ACTION")}</h6>
              </div>
            </div>
          </div>
          {(!data.items || data.items.length === 0) && (
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col text-center">{selectedReportTypeIdFilter ? t("NO_RESULTS") : t("PLEASE_CHOOSE_REPORT_TYPE_TO_SHOW")}</div>
            </div>
          )}
          {data.items &&
            data.items.map((report, index) => (
              <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <div className="col">
                  <small className="d-block d-lg-none">{t("NOTE")}:</small>
                  <h6 className="mb-0 fw-normal">{report.note}</h6>
                </div>

                <div className="col">
                  <small className="d-block d-lg-none">{t("REPORT_STATE")}:</small>
                  <h6 class={`badge bg-opacity-10 ${(reportStates.find(rs => rs.value == report.reportState).key) == 0 ? "bg-warning text-warning" : (reportStates.find(rs => rs.value == report.reportState).key) == 1 ? "bg-primary text-primary" : "bg-success text-success"}`} >
                    {reportStates.find(rs => rs.value == report.reportState).value}
                  </h6>
                </div>

                <div className="col">
                  <small className="d-block d-lg-none">{t("REPORTER_USER")}:</small>
                  <h6 className="mb-0 fw-normal">{report.reporterUser.firstName + report.reporterUser.lastName}</h6>
                </div>

                <div className="col">
                  <small className="d-block d-lg-none">{t("REPORTED_USER")}:</small>
                  <h6 className="mb-0 fw-normal">{report.reportedUser.firstName + " " + report.reportedUser.lastName}</h6>
                </div>

                <div className="col">
                  <button className="btn btn-sm btn-danger float-end mb-0 me-2" onClick={() => handleDelete(report.id)}>
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
        onConfirm={() => deleteReport(currentId)}
      ></ConfirmationDialog>}
    </>
  );
}
