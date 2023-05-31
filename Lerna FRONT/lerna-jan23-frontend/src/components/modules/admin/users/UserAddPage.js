import flatpickr from 'flatpickr';
import { camelCase } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EnumsService from '../../../../data/services/EnumsService';
import UsersService from '../../../../data/services/UsersService';
import toastify from '../../../../utils/toastify/toastify';
import ValidationErrors from "../../public/validator-messages/ValidationErrors";

export default function UserAddPage() {
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [roles, setRoles] = useState(null);
    const [genders, setGenders] = useState();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [apiErrors, setApiErrors] = useState();
    const {
        register,
        setError,
        formState: { errors },
        handleSubmit
    } = useForm();

    useEffect(() => {
        const fetchAndSetRoles = async () => {
            const rolesList = await EnumsService.getRoles();
            setRoles(rolesList);
        };
        const fetchAndSetGenders = async () => {
            const genders = await EnumsService.getGenders();
            setGenders(genders);
        };
        fetchAndSetRoles();
        fetchAndSetGenders();
    }, []);

    useEffect(() => {
        flatpickr("#myFlatPickr");
    }, [])

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        setPreviewUrl(URL.createObjectURL(file));
    }

    const ERROR_MESSAGES = {
        NotEmpty: 'REQUIRED_FIELD',
        NotNull: 'REQUIRED_FIELD',
        InvalidValue: 'INVALID_FILE_VALUE',
        InvalidType: 'INVALID_FILE_TYPE',
        InvalidSize: 'INVALID_FILE_SIZE',
    };

    const onSubmit = async (data) => {
        setFormSubmitting(true);
        if (data.profilePhoto.length > 0) {
            data.profilePhoto = data.profilePhoto[0];
        }
        const addedUser = await UsersService.add(data);
        setFormSubmitting(false);
        if (addedUser.isSuccess) {
            navigate("/admin/users");
            toastify.success(t("SUCCESSFULLY_ADDED_USER"));
        } else if (addedUser.isError) {
            toastify.error(t(addedUser.error));
        } else if (addedUser.isValidationError) {
            const apiErrorsObject = addedUser.validationErrors;
            apiErrorsObject.forEach(error => {
                const fieldName = camelCase(error.propertyName);
                error.errorCodes.forEach(errorCode => {
                    const errorMessage = t(ERROR_MESSAGES[errorCode]);
                    setError(fieldName, { type: 'custom', message: errorMessage });
                });
            });
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-5">
                    <h1 className="h3 mb-0">{t("NEW_USER")}</h1>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card shadow">
                    <div className="card-header border-bottom">
                        <h5 className="card-header-title">{t("USER_INFORMATION")}</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                            <div className="mb-3">
                                <label className="form-label">{t("FIRST_NAME")}</label>
                                <input
                                    {...register("firstName", {
                                        required: t("FIRST_NAME_IS_REQUIRED"),
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder={t("FIRST_NAME")}
                                />
                                {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("LAST_NAME")}</label>
                                <input
                                    {...register("lastName", {
                                        required: t("LAST_NAME_IS_REQUIRED"),
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder={t("LAST_NAME")}
                                />
                                {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("EMAIL")}</label>
                                <input
                                    {...register("email", {
                                        required: t("EMAIL_IS_REQUIRED"),
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder={t("EMAIL")}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("PASSWORD")}</label>
                                <input
                                    {...register("password", {
                                        required: t("PASSWORD_IS_REQUIRED"),
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder={t("PASSWORD")}
                                />
                                {errors.password && <span className="text-danger">{errors.password.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("PHONE_NUMBER")}</label>
                                <input
                                    {...register("phoneNumber", {
                                        required: t("PHONE_NUMBER_IS_REQUIRED"),
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder={t("PHONE_NUMBER")}
                                />
                                {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("GENDER")}</label>
                                <select
                                    {...register("gender", {
                                        required: t("GENDER_IS_REQUIRED"),
                                    })}
                                    className="form-control"
                                >
                                    <option value="">{t("CHOOSE_GENDER")}</option>
                                    {genders &&
                                        genders.map((gender, index) => (
                                            <option key={index} value={gender.key}>
                                                {gender.value}
                                            </option>
                                        ))}
                                </select>
                                {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("BIOGRAPHY")}</label>
                                <input
                                    {...register("biography")}
                                    type="text"
                                    className="form-control"
                                    placeholder={t("BIOGRAPHY")}
                                />
                                {errors.biography && <span className="text-danger">{errors.biography.message}</span>}
                            </div>
                            
                            <div className="mb-3">
                                <div className="flex-grow-1">
                                    <div className="flex-grow-1 mySelect">
                                        <i className="bi bi-calendar fs-5 me-1 mb-1"></i>
                                        <b><label className="mb-2">{t("BIRTHDATE")}</label></b>
                                        <input {...register("birthDate")} id="myFlatPickr" type="text" className="form-control flatpickr" placeholder="Select date" readOnly="readonly" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("ROLE")}</label>
                                <select
                                    {...register("role", {
                                        required: t("ROLE_IS_REQUIRED"),
                                    })}
                                    className="form-control"
                                >
                                    <option value="">{t("CHOOSE_ROLE")}</option>
                                    {roles &&
                                        roles.map((role, index) => (
                                            <option key={index} value={role.key}>
                                                {role.value}
                                            </option>
                                        ))}
                                </select>
                                {errors.role && <span className="text-danger">{errors.role.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("ACTIVITY_STATUS")}</label>
                                <div className="form-check form-switch form-check-md mb-0">
                                    <input {...register("isActive")} className="form-check-input" type="checkbox" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("VERIFICATION_STATUS")}</label>
                                <div className="form-check form-switch form-check-md mb-0">
                                    <input {...register("isVerified")} className="form-check-input" type="checkbox" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t("PROFILE_PHOTO")}</label>
                                <div className="form-check form-switch form-check-md mb-0">
                                    {previewUrl && <img src={previewUrl} alt="Profile photo preview" style={{ maxWidth: "200px", maxHeight: "200px", marginBottom: "10px" }} />}
                                    <input
                                        {...register("profilePhoto", { defaultValue: null })}
                                        onChange={handlePhotoUpload}
                                        className="form-control"
                                        type="file"
                                    />
                                    {errors.profilePhoto && <span className="text-danger">{errors.profilePhoto.message}</span>}
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/users")}>
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
    )
}



