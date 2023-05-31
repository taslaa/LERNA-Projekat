import React, { useState } from 'react'
import ArrowForward from '../../../layout/components/Icons/ArrowForward'
import { useTranslation } from 'react-i18next';

export default function QuestionsSection() {
    const { t } = useTranslation();
    return (
        <section className='py-0'>
            <div style={{ backgroundColor: 'white', marginBottom: '-200px' }}>

                <div style={{ backgroundColor: 'rgb(148, 0, 211)', marginBottom: '-400px' }}>
                    <div className="container" style={{ backgroundColor: 'rgb(148, 0, 211)' }}>
                        

                        <div className="row" style={{ backgroundColor: 'rgb(148, 0, 211)', height: '150px', alignContent: 'center' }}>
                            <div className="col"></div>
                            <div className="col-auto">
                                <h2 style={{ color: 'white', fontSize: '25px' }}>{t("FAQ")}</h2>

                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item bg-transparent" style={{ borderRadius: '0', borderRight: '0', borderLeft: '0', borderBottom: '0', borderTop: '1px solid white'}}>
                                        <h2 class="accordion-header bg-transparent border-0" id="headingOne">
                                            <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                {t("Q_RIDE_PRICE")}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-transparent text-white">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-transparent" style={{ borderRadius: '0', borderRight: '0', borderLeft: '0', borderBottom: '0', borderTop: '1px solid white'}}>
                                        <h2 class="accordion-header bg-transparent border-0" id="headingTwo">
                                            <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                {t("Q_RIDE_APPROVAL")}
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-transparent text-white">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-transparent" style={{ borderRadius: '0', borderRight: '0', borderLeft: '0', borderBottom: '1px solid white', borderTop: '1px solid white'}}>
                                        <h2 class="accordion-header bg-transparent border-0" id="headingThree">
                                            <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                {t("Q_RIDE_PROBLEM")}
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-transparent text-white">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item bg-transparent" style={{ borderRadius: '0', borderRight: '0', borderLeft: '0', borderBottom: '0', borderTop: '1px solid white'}}>
                                        <h2 class="accordion-header bg-transparent border-0" id="headingFour">
                                            <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                {t("Q_RIDE_CANCEL")}
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-transparent text-white">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-transparent" style={{ borderRadius: '0', borderRight: '0', borderLeft: '0', borderBottom: '0', borderTop: '1px solid white'}}>
                                        <h2 class="accordion-header bg-transparent border-0" id="headingFive">
                                            <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                {t("Q_RIDE_INSURANCE")}
                                            </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-transparent text-white">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-transparent" style={{ borderRadius: '0', borderRight: '0', borderLeft: '0', borderBottom: '1px solid white', borderTop: '1px solid white'}}>
                                        <h2 class="accordion-header bg-transparent border-0" id="headingSix">
                                            <button class="accordion-button bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                {t("Q_RIDE_DISCOUNT")}
                                            </button>
                                        </h2>
                                        <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div class="accordion-body bg-transparent text-white">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-6 mb-0">
                            <div className="col"></div>
                            <div className="col-auto">
                                <span className='text-light'>{t("INFO_CENTER_MORE")}</span>
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row mt-0" style={{ backgroundColor: 'rgb(148, 0, 211)', height: '200px', alignItems: 'center' }}>
                            <div className="col"></div>
                            <div className="col-auto">
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'rgb(253, 219, 60)', color: 'black', marginTop: '-100px' }}>
                                    <span>{t("INFO_CENTER")}</span>
                                    <ArrowForward col="col-auto mt-0 p-0" height="30" width="40" color="rgb(146, 15, 205)"></ArrowForward>
                                </a>
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row" style={{ height: '200px' }}>

                        </div>
                    </div >
                </div>

            </div >
        </section>
    )
}
