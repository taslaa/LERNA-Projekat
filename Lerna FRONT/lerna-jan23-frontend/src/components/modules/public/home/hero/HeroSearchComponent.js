import flatpickr from "flatpickr";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CitiesService from "../../../../../data/services/CitiesService";
import AsyncSelect from 'react-select/async';
import Select from "react-select";
import "./hero.css"
import { useNavigate } from "react-router";
import catalogStore from "../../../../../data/stores/CatalogStore";
import ArrowForward from "../../../../layout/components/Icons/ArrowForward";
import FromIcon from "../../../../layout/components/Icons/FromIcon";
import ToIcon from "../../../../layout/components/Icons/ToIcon";
import CalendarIcon from "../../../../layout/components/Icons/CalendarIcon";
import PersonIcon from "../../../../layout/components/Icons/PersonIcon";
import RecentSearchService from "../../../../../data/services/RecentSearchService";
import AuthService from "../../../../../data/services/AuthService";
import VerifiedIcon from "../../../../layout/components/Icons/VerifiedIcon";
import { useTranslation } from "react-i18next";

export default function HeroSearchComponent({ preLoadStore, colN }) {
    const { t } = useTranslation();
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm()
    const navigate = useNavigate();
    const [seats, setSeats] = useState();
    const [filter, setFilter] = useState({})
    const seatsOptions = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
        { value: 7, label: "7" },
        { value: 8, label: "8" }
    ]
    useEffect(() => {
        flatpickr("#myFlatPickr", {
            minDate: "today",
            // dateFormat: "d-m"
        });
        setFilter({ ...filter, seats: 1 });
    }, [])

    const FilterData = async (e) => {
        const response = await CitiesService.getPaged({ name: e, pageNumber: 1, pageSize: 999 });
        var temp = [];
        response.data.items.forEach(r => {
            temp.push({ value: r.id, label: r.name + ', ' + r.country.abbreviation });
        });
        return temp;
    }

    const SetFilterFrom = (e) => {
        setFilter({
            ...filter, cityFrom: {
                id: e.value,
                value: e.label
            }
        });
    }
    const SetFilterTo = (e) => {
        setFilter({
            ...filter, cityTo: {
                id: e.value,
                value: e.label
            }
        });
    }


    const HandleFormSubmit = async () => {
        catalogStore.add(filter);
        console.log(filter)
        /*var currentUser = await AuthService.getCurrentUser();
        await RecentSearchService.add({ name: filter.cityFrom.value, userId: currentUser.Id });
        await RecentSearchService.add({ name: filter.cityTo.value, userId: currentUser.Id });
        */
        navigate('/rides');
    }

    return (
        <>
            <style>
                {`.css-13cymwt-control, #myFlatPickr, .css-t3ipsp-control, .mySelect{
                    background-color:rgb(240, 240, 240);
                    border-radius:0 8px 8px 0;
                    border:none;
                    height:38px;
                }
                .icon{
                    background-color:rgb(240, 240, 240);
                    border:none;
                    border-radius:8px 0 0 8px;
                    height:38px;
                }
                `}
            </style>
            <div className="row justify-content-center  mt-n5 ">
                <div className={`col-${colN} mt-lg-n5 mt-2 `}>
                    <form onSubmit={handleSubmit(HandleFormSubmit)} className="card shadow rounded-3 mt-3 p-4 px-2 pe-md-2 pb-5 pb-md-4">
                        <div className="d-flex px-3">
                            <h5>{t("WHERE_TO")}?</h5>
                            <div className="d-flex col">
                                <div style={{ borderBottom: "2px solid rgb(240, 240, 240)", flexGrow: 1, maxHeight: "50%", marginLeft: "15px", marginRight: "15px" }}></div>
                            </div>
                        </div>
                        <div className="row justify-content-between px-4 ">
                            <div className="col-lg-3 px-1 ">
                                <div className="flex-grow-1">
                                    <div className="flex-grow-1 ">
                                        <label className="mb-1 small">{t("LEAVING_FROM")}:</label>
                                        <Controller style={{ background: "lightgray" }}
                                            name="locationFrom"
                                            control={control}
                                            rules={{ required: "Please select location" }}
                                            render={({ field }) => (
                                                <div className="input-group flex-row">
                                                    <div className="input-group-prepend col-lg-2 col-sm-1 col-2">
                                                        <span className="icon input-group-text ">
                                                            <i style={{ opacity: "50%" }}>
                                                                <FromIcon style={{}} size="20px"></FromIcon>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    <AsyncSelect
                                                        {...field}
                                                        className="basic-single myAsyncSelect  col-lg-10 col-sm-11 col-10"
                                                        onChange={(selectedOption) => {
                                                            field.onChange(selectedOption);
                                                            SetFilterFrom(selectedOption);
                                                        }}
                                                        defaultInputValue={
                                                            preLoadStore && catalogStore.filteredData != null
                                                                ? `${catalogStore.filteredData.cityFrom.value}`
                                                                : ""
                                                        }
                                                        loadOptions={FilterData}
                                                        placeholder={t("FROM")}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>
                                    {errors.locationFrom && <span className="text-danger small">{errors.locationFrom.message}</span>}
                                </div>

                            </div>

                            <div className="col-lg-3 px-1">
                                <div className="flex-grow-1">
                                    <div className="flex-grow-1 ">
                                        <label className="mb-1 small">{t("GOING")}:</label>
                                        <Controller
                                            name="locationTo"
                                            control={control}
                                            rules={{ required: "Please select location" }}
                                            render={({ field }) => (
                                                <div className="input-group flex-row">
                                                    <div className="input-group-prepend col-lg-2 col-sm-1 col-2">
                                                        <span className="icon input-group-text">
                                                            <i style={{ opacity: "50%" }}>
                                                                <ToIcon style={{}} size="20px"></ToIcon>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    <AsyncSelect {...field} 
                                                        className="basic-single myAsyncSelect col-lg-10 col-sm-11 col-10"
                                                        onChange={(selectedOption) => {
                                                            field.onChange(selectedOption);
                                                            SetFilterTo(selectedOption);
                                                        }}
                                                        defaultInputValue={preLoadStore && catalogStore.filteredData != null ? `${catalogStore.filteredData.cityTo.value}` : ''}
                                                        loadOptions={FilterData}
                                                        placeholder={t("TO")}
                                                    />
                                                </div>

                                            )}
                                        />
                                    </div>
                                    {errors.locationTo && <span className="text-danger small">{errors.locationTo.message}</span>}
                                </div>
                            </div>

                            <div className="col-lg-2 px-1">
                                <div className="flex-grow-1">
                                    <div className="flex-grow-1 ">
                                        <label className="mb-1 small">{t("DATE")}:</label>
                                        <div className="input-group flex-row">
                                            <div className="input-group-prepend">
                                                <span className="icon input-group-text ">
                                                    <i style={{ opacity: "50%" }} >
                                                        <CalendarIcon style={{}} size="20px"></CalendarIcon>
                                                    </i>
                                                </span>
                                            </div>
                                            <input style={{ width: "38px"}} onInput={(e) => setFilter({ ...filter, date: e.target.value })} id="myFlatPickr" type="date" className="form-control flatpickr col-lg-8 col-sm-11 col-10" defaultValue={preLoadStore && catalogStore.filteredData != null ? `${catalogStore.filteredData.date}` : ''} placeholder={t("DATE")} readOnly="readonly" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-auto px-1">
                                <div className="flex-grow-1">
                                    <div className="flex-grow-1 ">
                                        <label className="mb-1 small">{t("SEATS")}:</label>
                                        <div className="input-group flex-row">
                                            <div className="input-group-prepend col-lg-4 col-sm-1 col-2">
                                                <span className="icon input-group-text ">
                                                    <i style={{ opacity: "50%" }}>
                                                        <PersonIcon size="20px"></PersonIcon>
                                                    </i>
                                                </span>
                                            </div>
                                            <Select
                                                className="basic-single myAsyncSelect col-lg-8 col-sm-11  col-10"
                                                classNamePrefix="select"
                                                onChange={(selectedOption) => {
                                                    setSeats(selectedOption);
                                                    setFilter({ ...filter, seats: selectedOption.value })
                                                }}
                                                defaultValue={seatsOptions[0]}
                                                defaultInputValue={preLoadStore && catalogStore.filteredData != null ? `${catalogStore.filteredData.seats}` : ''}
                                                name="mySelect"
                                                options={seatsOptions}
                                                components={{ DropdownIndicator: () => <span style={{ opacity: "0%" }}>em</span> }}

                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-auto mt-3 px-1 ">
                                <div className="flex-grow-1">
                                    <button type="submit" className="mybtn flex-grow-1 backgroundColor ">
                                        <div className="row mt-1">
                                            <p className="col-9 mb-0 px-0 ">{t("SEARCH")}</p>
                                            <ArrowForward col="col-3 mt-0 p-0" height="30" width="40" color="#FDDC00"></ArrowForward>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

