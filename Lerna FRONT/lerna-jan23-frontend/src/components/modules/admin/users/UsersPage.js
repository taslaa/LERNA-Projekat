import _debounce, { debounce } from 'debounce';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import getAppPagingSettings from '../../../../config/paging/pagingConsts';
import UsersService from '../../../../data/services/UsersService';
import toastify from '../../../../utils/toastify/toastify';
import PagingComponent from '../../../layout/components/PagingComponent';
import ConfirmationDialog from '../../public/confirmation-dialog/ConfirmationDialog';

export default function UsersPage() {
    var pagingSettings = getAppPagingSettings();
    const [users, setUsers] = useState();
    const [pagingData, setPagingData] = useState(pagingSettings);
    const [data, setData] = useState([]);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [showConfirmationDialogDeactivate, setShowConfirmationDialogDeactivate] = useState(false);
    const [isDeactivate, setIsDeactivate] = useState(false);
    const [currentId, setCurrentId] = useState();
    const [searchParams, setSearchParams] = useState({});
    const navigate = useNavigate();
    const { t } = useTranslation();

    const fetchUsers = async (params) => {
        const usersList = await UsersService.getByParams({ ...params, pageNumber: pagingData.pageNumber, pageSize: pagingData.pageSize });
        console.log(params);
        setUsers(usersList.data.items);
        setData(usersList.data);
    }

    useEffect(() => {
        fetchUsers();
    }, [pagingData.pageNumber, pagingData.pageSize]);

    const onPageChange = (page) => {
        pagingData.pageNumber = page;
        setPagingData({ ...pagingData });
    }

    const handleDelete = (id) => {
        setShowConfirmationDialog(true);
        setCurrentId(id);
    };

    const handleDeactivate = (user) => {
        setIsDeactivate(user.isActive);
        setShowConfirmationDialogDeactivate(true);
        setCurrentId(user.id);
    };

    const searchQuery = (e) => {
        const params = { ...searchParams, query: e.target.value };
        setSearchParams(params);
        fetchUsers(params);
    };

    const searchActive = (e) => {
        const params = { ...searchParams, isActive: e.target.value };
        setSearchParams(params);
        fetchUsers(params);
    };

    const searchVerified = (e) => {
        const params = { ...searchParams, isVerified: e.target.value };
        setSearchParams(params);
        fetchUsers(params);
    };

    const deleteUser = async (id) => {
        const deletedUser = await UsersService.delete(id);
        if (deletedUser) {
            window.location.reload(false);
            toastify.success(t("SUCCESSFULLY_DELETED_USER"));
            setShowConfirmationDialog(false);
            window.location.reload(false);
        } else {
            toastify.error(t("ERROR_DELETING_USER"));
        }
    }

    const deactivateUser = async (id) => {
        console.log(id);
        const deactivatedUser = await UsersService.toggleStatus(id);
        if (deactivatedUser) {
            toastify.success("Successfully deactivated user.");
            setShowConfirmationDialogDeactivate(false);
            window.location.reload(false);
        } else {
            toastify.error(t("ERROR_DELETING_USER"));
        }
    }

    return (

        <>

            <div className="row d-flex">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row d-flex">
                                <div className="col-12 mb-4 mb-sm-4 d-flex justify-content-between">
                                    <div className="w-25 pr-2">
                                        <div className="form-group mb-3 mt-3">
                                            <label className="form-label">{t("SEARCH")}</label>
                                            <input type="text" class="form-control" placeholder={t("SEARCH")} onChange={_debounce(searchQuery, 500)}></input>
                                        </div>
                                    </div>
                                    <div className="w-25 pr-2">
                                        <div className="form-group mb-3 mt-3">
                                            <label className="form-label">{t("VERIFICATION_STATUS")}</label>
                                            <select
                                                className="form-control"
                                                onChange={searchVerified}
                                            >
                                                <option value={null}>{t("CHOOSE_VERIFICATION_STATUS")}</option>
                                                <option value={true}>{t("VERIFIED")}</option>
                                                <option value={false}>{t("UNVERIFIED")}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-25">
                                        <div className="form-group mb-3 mt-3">
                                            <label className="form-label">{t("ACTIVITY_STATUS")}</label>
                                            <select
                                                className="form-control"
                                                onChange={searchActive}
                                            >
                                                <option value={null}>{t("CHOOSE_ACTIVITY_STATUS")}</option>
                                                <option value={true}>{t("ACTIVE")}</option>
                                                <option value={false}>{t("INACTIVE")}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <div className='mt-5'>
                                            <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                                                + {t("NEW_USER")}
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="bg-light rounded p-3 d-none d-lg-block text-center">
                                <div className="row text-center">
                                    <div className="col">
                                        <h6 className="float-start mb-0">{t("USER_INFORMATION")}</h6>
                                    </div>
                                    <div className="col" style={{ textAlign: "center" }}>
                                        <h6 className="mb-0">Gender</h6>
                                    </div>
                                    <div className="col" style={{ textAlign: "center" }}>
                                        <h6 className="mb-0">Birth Date</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className="float-end mb-0">{t("ACTION")}</h6>
                                    </div>
                                </div>
                            </div>
                            {users && users.map((user, index) => (
                                <div key={index} className="row row-cols-xl-4 align-items-lg-center border-bottom g-2 px-2 py-4 d-flex">
                                    <div className="col d-flex">
                                        <div className="d-flex align-items-center">
                                            {user.profilePhotoId ? (
                                                <div style={{ width: "60px", height: "60px", borderRadius: "50%", overflow: "hidden", float: "left", display: "flex", alignItems: "center" }}>
                                                    <img src={`https://localhost:7111/api/Photos/${user.profilePhotoId}`}
                                                        className="card-img-top me-5"
                                                        alt="Profile Photo"
                                                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
                                                </div>
                                            ) : (
                                                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#ccc", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <i className="fas fa-user" style={{ fontSize: "20px" }}></i>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ms-3 d-flex flex-column">
                                            <div className='d-flex flex-column'>
                                                <h6 className="mb-0 fw-normal" style={{ color: "black", fontWeight: "bold" }}>{user.firstName} {user.lastName}</h6>
                                                <h6 className="mb-0" style={{ color: "gray", fontWeight: "normal" }}>{user.email}</h6>
                                            </div>
                                            <div className='d-flex mt-2'>
                                                <div className={`badge bg-opacity-10 ${user.isActive ? "bg-success text-success me-2" : "bg-danger text-danger me-2"}`}>{user.isActive ? "Active" : "Inactive"}</div>
                                                <div className={`badge bg-opacity-10 ${user.isVerified ? "bg-success text-success" : "bg-danger text-danger"}`}>{user.isVerified ? "Verified" : "Unverified"}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ textAlign: "center" }}>
                                        <h6 className="mb-0" style={{ color: "black", fontWeight: "normal" }}>{user.gender}</h6>
                                    </div>
                                    <div className="col" style={{ textAlign: "center" }}>
                                        <h6 className="mb-0" style={{ color: "black", fontWeight: "normal" }}>{new Date(user.birthDate).toLocaleDateString('en-GB')}</h6>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-sm btn-danger float-end mb-0" onClick={() => handleDelete(user.id)}>
                                            {t("DELETE")}
                                        </button>
                                        <button className={`btn btn-sm ${user.isActive ? 'btn-danger' : 'btn-primary'} float-end mb-0 me-2`} onClick={() => handleDeactivate(user)}>
                                            {user.isActive ? 'Deactivate' : 'Activate'}
                                        </button>
                                        <button className="btn btn-sm btn-info float-end mb-0 me-2" onClick={() => navigate(`edit/${user.id}`)}>
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
                </div>
            </div>
            {showConfirmationDialog && <ConfirmationDialog
                onDiscard={() => setShowConfirmationDialog(false)}
                title="Delete item"
                description="Are you sure you want to delete this item? This action cannot be undone."
                confirmBtnLabel="Delete"
                onConfirm={() => deleteUser(currentId)}
            ></ConfirmationDialog>}
            {showConfirmationDialogDeactivate && <ConfirmationDialog
                onDiscard={() => setShowConfirmationDialogDeactivate(false)}
                title={`${isDeactivate ? "Deactivate" : "Activate"} user`}
                description={`Are you sure you want to ${isDeactivate ? "deactivate" : "activate"} this user?`}
                confirmBtnLabel={`${isDeactivate ? "Deactivate" : "Activate"}`}
                onConfirm={() => deactivateUser(currentId)}
            ></ConfirmationDialog>}
        </>
    )
}