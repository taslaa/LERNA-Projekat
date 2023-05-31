import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import RidesService from "../../../../data/services/RidesService";
import EnumsService from "../../../../data/services/EnumsService";
import toastify from "../../../../utils/toastify/toastify";
import Header from "../../../layout/components/Header";
import Footer from "../../../layout/components/Footer";
import flatpickr from "flatpickr";
import TableRows from "./TableRows.js";

export default function RideAddPage() {
    const { register, formState: { errors }, handleSubmit, clearErrors } = useForm();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const [paymentTypes, setPaymentTypes] = useState();
    const [communicationTypes, setCommunicationTypes] = useState();
    const [filter, setFilter] = useState({});
    const [rows, initRow] = useState([]);

    useEffect(() => {
        const fetchAndSetPaymentTypes = async () => {
            const paymentTypeList = await EnumsService.getPaymentTypes();
            setPaymentTypes(paymentTypeList);
        };
        fetchAndSetPaymentTypes();

        const fetchAndSetCommunicationTypes = async () => {
            const communicationTypeList = await EnumsService.getCommunicationTypes();
            setCommunicationTypes(communicationTypeList);
        };
        fetchAndSetCommunicationTypes();

        flatpickr(".date-picker", {
            minDate: "today"
        });
    }, []);

    const addRowTable = () => {
        const data = {
            locationName: "",
            dateTime: "",
            cityId: ""
        };
        initRow([...rows, data]);
        flatpickr(".date-picker", {
            minDate: "today"
        });
    };
    const tableRowRemove = (index) => {
        const dataRow = [...rows];
        dataRow.splice(index, 1);
        initRow(dataRow);
    };

    const onSubmit = async (data) => {
        data.milestones = rows;
        setFormSubmitting(true);
        if (data.milestones.length >= 2) {
            data.paymentType = parseInt(data.paymentType);
            data.communicationType = parseInt(data.communicationType);
            const newRide = await RidesService.add({ ...data, milestones: rows });
            setFormSubmitting(false);
            if (newRide) {
                navigate("/");
                toastify.success(t("SUCCESSFULLY_ADDED_BASIC_RIDE_INFORMATION"));
            } else {
                setFormSubmitting(false);
                toastify.error(t("ERROR_ADDING_BASIC_RIDE_INFORMATION"));
            }
        } else {
            setFormSubmitting(false);
            toastify.error(t("ERROR_ADDING_BASIC_RIDE_INFORMATION"));
        }
    };

    return (
        <>
            <Header></Header>
            <div className="container mb-5">
                <section className="pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="fs-2 mb-2">{t("ADD_NEW_RIDE")}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="col-lg-12">
                    <div className="card shadow">
                        <div className="card-header border-bottom">
                            <h5 className="mb-0">{t("BASIC_INFORMATION")}</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row g-4">
                                    <div className="col-lg-3 d-flex">
                                        <div className="flex-grow-1">
                                            <div className="flex-grow-1 mySelect">
                                                <i className="bi bi-calendar fs-5 me-1 mb-1"></i>
                                                <label className="mb-2">{t("START_DATETIME")}</label>
                                                <input
                                                    {...register("startDateTime", {
                                                        required: t("START_DATETIME_IS_REQUIRED"),
                                                    })}
                                                    onInput={(e) => setFilter({ date: e.target.value }, clearErrors("startDateTime"))}
                                                    type="text"
                                                    className="form-control flatpickr date-picker"
                                                    placeholder="Select date"
                                                    readOnly="readonly" />
                                            </div>
                                            {errors.startDateTime && <span className="text-danger">{errors.startDateTime.message}</span>}
                                        </div>
                                    </div>

                                    <div className="col-3 d-flex">
                                        <div className="flex-grow-1">
                                            <div className="flex-grow-1 mySelect">
                                                <i className="bi bi-calendar fs-5 me-1 mb-1"></i>
                                                <label className="mb-2">{t("END_DATETIME")}</label>
                                                <input
                                                    {...register("endDateTime", {
                                                        required: t("END_DATETIME_IS_REQUIRED"),
                                                    })}
                                                    onInput={(e) => setFilter({ date: e.target.value }, clearErrors("endDateTime"))}
                                                    type="text"
                                                    className="form-control flatpickr date-picker"
                                                    placeholder="Select date"
                                                    readOnly="readonly"
                                                />
                                            </div>
                                            {errors.endDateTime && <span className="text-danger">{errors.endDateTime.message}</span>}
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <label className="form-label">{t("PRICE")}</label>
                                        <input
                                            {...register("price", {
                                                required: t("PRICE_IS_REQUIRED"),
                                            })}
                                            className="form-control"
                                            type="text"
                                            placeholder="Price" />
                                        {errors.price && <span className="text-danger">{errors.price.message}</span>}
                                    </div>


                                    <div className="col-3">
                                        <label className="form-label">{t("MAX_PASSENGERS_COUNT")}</label>
                                        <input
                                            {...register("maxPassengersCount", {
                                                required: t("MAX_PASSENGERS_COUNT_IS_REQUIRED"),
                                            })}
                                            className="form-control"
                                            type="text"
                                            placeholder="Max passengers count" />
                                        {errors.maxPassengersCount && <span className="text-danger">{errors.maxPassengersCount.message}</span>}
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6 mt-3">
                                        <div className="flex-grow-1">
                                            <label className="mb-2">{t("PAYMENT_TYPE")}</label>
                                            <select
                                                {...register("paymentType", {
                                                    required: t("PAYMENT_TYPE_IS_REQUIRED"),
                                                })}
                                                className="form-control"
                                            >
                                                <option value="">{t("CHOOSE_PAYMENT_TYPE")}</option>
                                                {paymentTypes &&
                                                    paymentTypes.map((paymentType, index) => (
                                                        <option key={index} value={paymentType.key}>
                                                            {t(`PAYMENT_TYPE_${paymentType.value.toUpperCase()}`)}
                                                        </option>
                                                    ))}

                                            </select>
                                            {errors.paymentType && <span className="text-danger">{errors.paymentType.message}</span>}
                                        </div>
                                    </div>
                                    <div className="col-6 mt-3">
                                        <div className="flex-grow-1">
                                            <div className="pl-0">
                                                <label className="mb-2">{t("COMMUNICATION_TYPE")}</label>
                                                <select
                                                    {...register("communicationType", {
                                                        required: t("COMMUNICATION_TYPE_IS_REQUIRED"),
                                                    })}
                                                    className="form-control"
                                                >
                                                    <option value="">{t("CHOOSE_COMMUNICATION_TYPE")}</option>
                                                    {communicationTypes &&
                                                        communicationTypes.map((communicationType, index) => (
                                                            <option key={index} value={communicationType.key}>
                                                                {t(`COMMUNICATION_TYPE_${communicationType.value.toUpperCase()}`)}
                                                            </option>
                                                        ))}
                                                </select>
                                                {errors.communicationType && <span className="text-danger">{errors.communicationType.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <label className="form-label">{t("NOTES")}</label>
                                    <textarea
                                        {...register("notes")}
                                        className="form-control"
                                        rows="2"
                                        placeholder="Enter notes"></textarea>
                                    {errors.notes && <span className="text-danger">{errors.notes.message}</span>}
                                </div>

                                <button type="button" className="btn btn-dark mt-2 float-end" onClick={addRowTable}>
                                    {t("ADD_MILESTONE")}
                                </button>

                                <table className="table">
                                    <thead>
                                        <tr className="col-auto">
                                            <th>{t("LOCATION_NAME")}</th>
                                            <th>{t("DATETIME")}</th>
                                            <th>{t("CITY_LABEL")}</th>
                                            <th>{t("PRICE")}</th>
                                            <th className="float-end">{t("ACTION")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRows
                                            rows={rows}
                                            tableRowRemove={tableRowRemove}
                                        />
                                    </tbody>
                                </table>

                                <div className="d-flex justify-content-end mt-4">
                                    <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/")}>
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
            </div>
            <Footer></Footer>
        </>
    );
}