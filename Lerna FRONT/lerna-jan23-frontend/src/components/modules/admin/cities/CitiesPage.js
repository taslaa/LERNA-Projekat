import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CountriesService from "../../../../data/services/CountriesService";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import CitiesService from "../../../../data/services/CitiesService";
import { useSearchParams } from "react-router-dom";
import ConfirmationDialog from "../../public/confirmation-dialog/ConfirmationDialog";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";
import PagingComponent from "../../../layout/components/PagingComponent";

export default function CitiesPage() {
  var pagingSettings = getAppPagingSettings();
  const [pagingData, setPagingData] = useState(pagingSettings);
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState();
  const [countryIdFilter, setCountryIdFilter] = useState("");
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [currentId, setCurrentId] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchAndSetCountries = async (params) => {
      const countriesList = await CountriesService.getByParams({ pageNumber: 1, pageSize: 999, ...params });
      setCountries(countriesList.data);
    };
    fetchAndSetCountries();
    const countryId = searchParams.get("countryId");
    if (countryId) {
      setCountryIdFilter(countryId);
      const fetchCitiesByCountryId = async () => {
        const citiesByCountry = await CitiesService.getPaged({ pageNumber: 1, pageSize: 999, CountryId: countryId });
        setData(citiesByCountry.data);
        console.log(data);
      };
      fetchCitiesByCountryId();
    }
  }, []);

  const onCountryChange = async (e) => {
    const countryId = e.target.value;
    setCountryIdFilter(countryId);
    setSearchParams({ countryId: countryId });
    if (countryId) {
      const citiesByCountry = await CitiesService.getPaged({ pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize, countryId: countryId });
      setData(citiesByCountry.data);
    } else {
      setData({});
    }
  };

  const onPageChange = (page) => {
    pagingData.pageNumber = page;
    setPagingData({ ...pagingData });
  }

  const handleDelete = (id) => {
    setShowConfirmationDialog(true);
    setCurrentId(id);
  };

  const deleteCity = async (id) => {
    const deleted = await CitiesService.delete(id);
    if (deleted.isSuccess) {
      window.location.reload(false);
      toastify.success(t("SUCCESSFULLY_DELETED_CITY"));
      setShowConfirmationDialog(false);
    } else {
      toastify.error(t("ERROR_DELETING_CITY"));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">{t("CITIES")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create", { state: { countryId: searchParams.get("countryId") } })}>
                + {t("NEW_CITY")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="mb-4">
            <select className="form-control" onChange={onCountryChange} value={countryIdFilter}>
              <option value="">{t("CHOOSE_COUNTRY")}</option>
              {countries &&
                countries.items.map((country, index) => (
                  <option key={index} value={country.id}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NAME")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("ZIP_CODE")}</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">{t("STATUS")}</h6>
              </div>
              <div className="col">
                <h6 className="float-end mb-0">{t("ACTION")}</h6>
              </div>
            </div>
          </div>
          {(!data.items || data.items.length === 0) && (
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col text-center">{countryIdFilter ? t("NO_RESULTS") : t("PLEASE_CHOOSE_COUNTRY_TO_SHOW")}</div>
            </div>
          )}
          {data.items &&
            data.items.map((city, index) => (
              <div key={index} className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <div className="col">
                  <small className="d-block d-lg-none">{t("NAME")}:</small>
                  <h6 className="mb-0 fw-normal">{city.name}</h6>
                </div>

                <div className="col">
                  <small className="d-block d-lg-none">{t("ZIP_CODE")}:</small>
                  <h6 className="mb-0 fw-normal">{city.zipCode}</h6>
                </div>
                <div className="col">
                  <small className="d-block d-lg-none">{t("STATUS")}:</small>
                  <div className={`badge bg-opacity-10 ${city.isActive ? "bg-success text-success" : "bg-danger text-danger"}`}>{city.isActive ? "Active" : "Inactive"}</div>
                </div>

                <div className="col">
                  <button className="btn btn-sm btn-danger float-end mb-0" onClick={() => handleDelete(city.id)}>
                    {t("DELETE")}
                  </button>
                  <button className="btn btn-sm btn-info float-end mb-0 me-2" onClick={() => navigate(`edit/${city.id}`)}>
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
        onConfirm={() => deleteCity(currentId)}
      ></ConfirmationDialog>}
    </>
  );
}
