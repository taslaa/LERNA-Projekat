import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ConditionsService from "../../../../data/services/ConditionsService";
import toastify from "../../../../utils/toastify/toastify";
import debounce from "lodash.debounce";
import ConfirmationDialog from "../../public/confirmation-dialog/ConfirmationDialog";
import PagingComponent from "../../../layout/components/PagingComponent";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";

export default function ConditionsPage() {
  var pagingSettings = getAppPagingSettings();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [pagingData, setPagingData] = useState(pagingSettings);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [data, setData] = useState([]);

  const fetchConditions = async (params) => {
    const conditionsListDataApiResponse = await ConditionsService.getByParams({ pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize, ...params });
    setData(conditionsListDataApiResponse.data);
  }

  useEffect(() => {
    fetchConditions();
  }, [pagingData.pageNumber, pagingData.pageSize]);

  const onPageChange = (page) => {
    pagingData.pageNumber = page;
    setPagingData({ ...pagingData });
  }

  const handleDelete = (id) => {
    setShowConfirmationDialog(true);
    setCurrentId(id);
  };

  const deleteCondition = async (id) => {
    const deleted = await ConditionsService.delete(id);
    if (deleted.isSuccess) {
      window.location.reload(false);
      toastify.success(t("SUCCESSFULLY_DELETED_CONDITION"));
      setShowConfirmationDialog(false);
    } else {
      toastify.error(t("ERROR_DELETING_CONDITION"));
    }
  };

  const searchChange = (e) => fetchConditions({ name: e.target.value });

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">{t("CONDITIONS")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                + {t("NEW_CONDITION")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="mb-4">
            <input type="text" class="form-control" placeholder="Search" onChange={debounce(searchChange, 500)}></input>
          </div>
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NAME")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("DESCRIPTION")}</h6>
              </div>
              <div className="col">
                <h6 className="float-end mb-0">{t("ACTION")}</h6>
              </div>
            </div>
          </div>
          {(!data.items || data.items.length === 0) && (
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col text-center">{t("NO_RESULTS")}</div>
            </div>
          )}
          {data.items && data.items.map((condition, index) => (
            <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col">
                <small className="d-block d-lg-none">{t("NAME")}:</small>
                <h6 className="mb-0 fw-normal">{condition.name}</h6>
              </div>
              <div className="col">
                <small className="d-block d-lg-none">{t("DESCRIPTION")}:</small>
                <h6 className="mb-0 fw-normal">{condition.description}</h6>
              </div>
              <div className="col">
                <button className="btn btn-sm btn-danger float-end mb-0" onClick={() => handleDelete(condition.id)}>
                  {t("DELETE")}
                </button>
                <button className="btn btn-sm btn-info float-end mb-0 me-2" onClick={() => navigate(`edit/${condition.id}`)}>
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
        onConfirm={() => deleteCondition(currentId)}
      ></ConfirmationDialog>}
    </>
  );
}