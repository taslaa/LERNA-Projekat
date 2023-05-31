import catalogStore from "../../../../data/stores/CatalogStore";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react'
import { useForm, } from "react-hook-form";
import { useRef } from 'react';
import "../catalog-page/CatalogSideFilters.css"
import CatalogFiltersService from "../../../../data/services/CatalogFiltersService";
import { useEffect } from "react";

export default function CatalogSideFilters() {
  const refOrderBy = useRef([]);
  const refDepartureTime = useRef([]);
  const refConditions = useRef([]);
  const { t } = useTranslation();
  const [filter, setFilter] = useState({});
  const [orderBy, setOrderBy] = useState([]);
  const [departureTime, setDepartureTime] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [checked, setChecked] = useState([]);

  const [orderByIndex, setOrderByIndex] = useState([]);
  const [departureIndex, setDepartureIndex] = useState([]);

  const [departureTimeValues, setDepartureTimeValues] = useState([]);
  const [orderByValues, setOrderByValues] = useState([]);
  const [conditionValues, setConditionValues] = useState([]);

  const [filterValues, setFilterValues] = useState({});
  const {
    handleSubmit,
  } = useForm();
  const setFilters = (e) => {
    setFilter({
      ...filter, orderBy, departureTime, conditions
    });
    catalogStore.add(filter);
  };

  const removeFilters = () => {
    setFilter({
      ...filter, price: null, models: null, seats: null
    })
  }

  const clearAll = () => {
    for (let i = 0; i < refOrderBy.current.length; i++) {
      setOrderByIndex([]);
      refOrderBy.current[i].checked = false;
    };
    for (let i = 0; i < refDepartureTime.current.length; i++) {
      refDepartureTime.current[i].checked = false;
      setDepartureIndex([]);
    };
    for (let i = 0; i < refConditions.current.length; i++) {
      setChecked(checked.filter((i) => { return (false) }));
      setConditions([]);
    };
    removeFilters();
    catalogStore.add(filter);
  };

  const handleCheckboxChangeOrderBy = (e, value) => {
    if (e.target.checked) {
      setOrderBy([e.target.value]);
      setOrderByIndex([value]);
    }
    else {
      setOrderBy([]);
    }
    setFilters();
  };
  const handleCheckboxChangeDeparture = (e, value) => {
    if (e.target.checked) {
      setDepartureTime([e.target.value]);
      setDepartureIndex([value]);
    }
    else {
      setDepartureTime([]);
    }
    setFilters();
  };

  const handleCheckboxChangeConditions = (e, value) => {
    if (e.target.checked) {
      setConditions([...conditions, e.target.value]);
      setChecked([...checked, value]);
    }
    else {
      setConditions([]);
      setChecked(checked.filter((i) => { return (i !== value) }));
    }
    setFilters();
  };

  const handleFilterSubmit = () => {
    console.log(filter);
    catalogStore.add(filter);
  };

  const fetchFilterValues = () => {
    setOrderByValues(filterValues.availableOrderings);
    setDepartureTimeValues(filterValues.availableDepartureTimes);
    setConditionValues(filterValues.availableConditions);
  }
  useEffect(() => {
    const fetchAndSetFilters = async () => {
      const Values = await CatalogFiltersService.getFilters();
      setFilterValues(Values);
    };
    fetchAndSetFilters();
    fetchFilterValues();
  }, [filterValues]);

  return (
    <aside className="col-xl-4 col-xxl-3 ms-8">
      <div data-sticky="" data-margin-top="80" data-sticky-for="1199">
        <div className="offcanvas-xl offcanvas-end" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
          <div className="offcanvas-body flex-column p-3 p-xl-0">
            <form className="" onChange={handleSubmit(handleFilterSubmit)}>
              <div className="card card-body ps-4 pb-0">
                <row className="mb-2">
                  <span className="col-8 me-7 mb-2 " id="offcanvasSidebarLabel" style={{fontSize:"24px", fontWeight:"bold"}}>{t("ORDER_BY")}</span>
                  <button className="col-4  ms-4 btn btn-link p-0 mb-0" type="button" onClick={clearAll}>{t("CLEAR_FILTERS")}</button>
                </row>
                {orderByValues && orderByValues.map((ordering, index) => {
                  return (
                    <div key={index} className="form-check">
                      <input
                        value={ordering}
                        checked={orderByIndex.includes(index)}
                        onChange={(e) => (handleCheckboxChangeOrderBy(e, index))}
                        className="form-check-input" type="checkbox"
                        ref={(element) => { refOrderBy.current[index] = element }}
                      />
                      <label className="form-check-label">{t(`${ordering}`)}</label>
                    </div>
                  )})}
              </div>
              <div className="card card-body ps-4 pb-0">
                <h5 className="mb-2" id="offcanvasSidebarLabel">{t("DEPARTURE_TIME")}</h5>
                {departureTimeValues && departureTimeValues.map((time, index) => {
                  return (
                    <div key={index} className="form-check">
                      <input
                        value={time}
                        checked={departureIndex.includes(index)}
                        onChange={(e) => (handleCheckboxChangeDeparture(e, index))}
                        className="form-check-input" type="checkbox"
                        ref={(element) => { refDepartureTime.current[index] = element }}
                      />
                      <label className="form-check-label" >{time.fromHour}:00 - {time.toHour}:00</label>
                    </div>
                  )})}
              </div>
              <div className="card card-body ps-4">
                <h5 className="mb-2" id="offcanvasSidebarLabel">{t("CONDITIONS")}</h5>
                {conditionValues && conditionValues.map((condition, index) => {
                  return (
                    <div key={index} className="form-check custom-control custom-checkbox ps-0">
                      <input
                        value={condition}
                        checked={checked.filter((i) => { return i === index }).length > 0}
                        onChange={(e) => (handleCheckboxChangeConditions(e, index))}
                        className="custom-control-input" type="checkbox"
                        ref={(element) => { refConditions.current[index] = element }}
                        style={{ accentColor: "RGB(146, 15, 205)"}}
                      />
                      <label className="form-check-label ps-2">{condition.name}</label>
                    </div>
                  )
                })}
              </div>
            </form >
          </div >
        </div >
      </div >
    </aside >

  )
}  