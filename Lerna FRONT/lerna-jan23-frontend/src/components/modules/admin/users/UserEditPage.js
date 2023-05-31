import axios from 'axios';
import flatpickr from 'flatpickr';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import EnumsService from '../../../../data/services/EnumsService';
import UsersService from '../../../../data/services/UsersService';
import toastify from '../../../../utils/toastify/toastify';

export default function UserEditPage() {
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [previewUrl, setPreviewUrl] = useState();
    const [profilePhotoId, setProfilePhotoId] = useState();
    const [genders, setGenders] = useState();
    const [roles, setRoles] = useState(null);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { id } = useParams();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const [profilePhotoUrl, setProfilePhotoUrl] = useState();

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfilePhotoUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        flatpickr("#myFlatPickr");
    }, [])

    useEffect(() => {
        const fetchAndSetRoles = async () => {
            const rolesList = await EnumsService.getRoles();
            setRoles(rolesList);
            const genders = await EnumsService.getGenders();
            setGenders(genders);
            console.log(genders)
            const user = await UsersService.getById(id);
            const photoId = user.data.profilePhotoId;
            setProfilePhotoId(photoId);
            setProfilePhotoUrl(`https://localhost:7111/api/Photos/${photoId}`)
            if (user) {
                reset(user.data);
            } else {
                navigate("/admin/users")
            }
        };
        fetchAndSetRoles();
    }, []);

    const onSubmit = async (data) => {
        setFormSubmitting(true);
        if (data.profilePhoto && data.profilePhoto.length > 0) {
            data.profilePhoto = data.profilePhoto[0];
        }
        const editedUser = await UsersService.edit({ id: id, ...data });
        if (editedUser.isSuccess) {
            setFormSubmitting(false);
            navigate(`/admin/users`);
            toastify.success(t("SUCCESSFULLY_EDITED_USER"));
        }

    };

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-5">
                    <h1 className="h3 mb-0">{t("EDIT_USER")}</h1>
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
                                            <option key={index} value={gender.id}>
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
                                            <option key={index} value={role.id}>
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
                                    <img
                                        src={profilePhotoUrl}
                                        className="card-img-top"
                                        alt="Profile Photo"
                                        style={{ maxWidth: "200px", maxHeight: "200px", marginBottom: "10px" }}
                                    />
                                    <input
                                        {...register("profilePhoto")}
                                        onChange={handlePhotoUpload}
                                        className="form-control mt-3"
                                        type="file"
                                    />
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
