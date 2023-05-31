import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../../..//layout/components/LanguageSwitcher'

export default function InfoHeader() {
    const { t } = useTranslation()
    return (
        <div className='container'>
            <div className='ms-3 me-3 pe-2 ps-2'>

                <div className='text-center mt-5 pt-4'>
                    <h4 className='naslov' style={{ color: 'rgba(146, 15, 205, 1)' }}>{t("CHOSE_DRIVE")}</h4>
                    <h4 className='naslov mb-4' style={{ color: 'rgba(146, 15, 205, 1)' }}>{t("WHENEVER")}</h4>
                    <div className='mb-1' >
                        <span className='text-dark'><span className='fw-bold'>VoziMe! </span>{t("ABOUT_VOZIME")} </span>
                    </div>
                    <div>
                        <span className='text-dark'>{t("TRANSPORTATION")} </span>
                    </div>
                </div>
                <div className='row mt-5 g-7'>
                    <div className='col-md-6 col-xs-12'>
                        <div className="card">
                            <div className="card-body rounded-3 shadow-lg border border-white">
                                <div className='row ps-3 pt-4 pe-3'>
                                    <div className='col '>
                                        <h4 className=''>{t("SAFETY_HEADER")} </h4>
                                        <p className='text-dark pb-3 '>{t("SUPPORT")}</p>
                                    </div>
                                    <div className='col-auto '>
                                        <img src="/assets/images/safety_check.svg" style={{ width: "70px" }} />
                                    </div>
                                </div>
                                <div className="row mt-2 mb-3 pe-3">
                                    <div className="col"></div>
                                    <div className="col-auto">
                                        <a href='#'>
                                            <span className="text-black fw-normal me-2">{t("SAFETY")}</span>
                                            <img src='/assets/images/arrow_forward_long.svg' style={{ width: "50px" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 '>
                        <div className="card">
                            <div className="card-body rounded-3 shadow-lg border border-white">
                                <div className='row ps-3 pt-4 pe-3'>
                                    <div className='col'>
                                        <h4 className='col-9'>{t("DOWNLOAD_APP")} </h4>
                                        <div className='col-7'>
                                            <p className='text-dark'>{t("DOWNLOAD_DETAIL")}</p>
                                        </div>
                                    </div>
                                    <div className='col-auto '>
                                        <img src="assets/images/logo-icon.svg" style={{ height: "70px" }} />
                                    </div>
                                </div>

                                <div className="row mt-3 mb-2 pb-1 pe-3">
                                    <div className="col"></div>
                                    <div className="col-auto">
                                        <a href='#'><img className='me-2' src='/assets/images/element/app-store.svg' style={{ height: "40px" }} /></a>
                                        <a href='#'><img className='me-2' src='/assets/images/element/google-play.svg' style={{ height: "40px" }} /></a>
                                        <a href='#'><img className='me-2' src='/assets/images/element/google-play.svg' style={{ height: "40px" }} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
