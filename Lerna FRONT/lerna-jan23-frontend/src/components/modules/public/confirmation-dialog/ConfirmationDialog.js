import { useState } from "react";
import { useTranslation } from "react-i18next";

const ConfirmationDialog = (props) => {
    const { t } = useTranslation();
    const [isDeleting, setIsDeleting] =useState(false);

    const handleDiscard = () => {
        props.onDiscard();
    }

    const handleDelete = () => {
        setIsDeleting(true);
        props.onConfirm();
    }

    return (
        <>
            <div className="position-fixed z-index-9999 top-0 start-0 bottom-0 end-0 w-100 bg-dark bg-lighten-lg bg-opacity-50">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="card shadow">
                        <div className="card-header border-bottom">
                            <h5 className="card-header-title">{props.title}</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">{props.description}</label>
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn text-secondary border-0 me-2 ${props.onDiscard" onClick={() => handleDiscard()}>
                                    {t("DISCARD")}
                                </button>
                                <button disabled={isDeleting} type="submit" className="btn btn-danger" onClick={() => handleDelete()}>
                                    {isDeleting && <i className="fa fa-spin fa-spinner"></i>}
                                    {props.confirmBtnLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationDialog;