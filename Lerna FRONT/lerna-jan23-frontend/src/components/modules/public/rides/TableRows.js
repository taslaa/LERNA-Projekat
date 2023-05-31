import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import React from "react";
import flatpickr from "flatpickr";
import CitiesService from "../../../../data/services/CitiesService";
import getAppPagingSettings from "../../../../config/paging/pagingConsts";

const TableRows = ({ rows, tableRowRemove }) => {
    var pagingSettings = getAppPagingSettings();
    const { formState: { errors }, getValues } = useForm();
    const [cities, setCities] = useState();
    const [pagingData, setPagingData] = useState(pagingSettings);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchAndSetCities = async (id) => {
            const citiesList = await CitiesService.getPaged({ pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize });
            setCities(citiesList.data.items);
        };
        fetchAndSetCities();

        flatpickr(".date-picker", {
            minDate: "today"
        });
    }, [rows.length]);

    const updateValue = (index, event, property) => {
        rows[index][property] = event.target.value;
    }

    return (
        rows.map((rowsData, index) => {
            const { locationName, dateTime, type, cityId } = rowsData;
            return (
                <tr key={index}>
                    <td>
                        <label className="d-block d-lg-none">{t("LOCATION_NAME")}:</label>
                        <input
                            onInput={(event) => updateValue(index, event, "locationName")}
                            className="form-control"
                            type="text"
                            placeholder="Location name" />
                        {errors.locationName && <span className="text-danger">{errors.locationName.message}</span>}
                    </td>
                    <td>
                        <label className="d-block d-lg-none">{t("DATETIME")}:</label>
                        <input
                            onInput={(event) => updateValue(index, event, "dateTime")}
                            type="text"
                            className="form-control flatpickr date-picker"
                            placeholder="Select date"
                            readOnly="readonly" />
                        {errors.dateTime && <span className="text-danger">{errors.dateTime.message}</span>}
                    </td>
                    <td>
                        <label className="d-block d-lg-none">{t("CITY_LABEL")}:</label>
                        <select
                            onChange={(event) => updateValue(index, event, "cityId")}
                            className="form-control"
                            defaultValue={getValues("cityId")}
                        >
                            <option value="">{t("CHOOSE_CITY")}</option>
                            {cities &&
                                cities.map((city, index) => (
                                    <option key={index} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                        </select>
                        {errors.cityId && <span className="text-danger">{errors.cityId.message}</span>}
                    </td>
                    <td>
                        <label className="d-block d-lg-none">{t("PRICE")}:</label>
                        <input
                            onInput={(event) => updateValue(index, event, "price")}
                            className="form-control"
                            type="text"
                            placeholder="Price" />
                        {errors.price && <span className="text-danger">{errors.price.message}</span>}
                    </td>
                    <td>
                        <button
                            className="btn btn-danger float-end"
                            onClick={() => tableRowRemove(index)}
                        >
                            -
                        </button>
                    </td>
                </tr>
            )
        })
    );
}

export default TableRows;