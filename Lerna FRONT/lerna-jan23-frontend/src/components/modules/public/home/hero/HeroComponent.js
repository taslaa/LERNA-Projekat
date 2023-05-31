import React from "react";
import HeroSearchComponent from "./HeroSearchComponent";
import "./hero.css"
import { useTranslation } from "react-i18next";


export default function HeroComponent() {
    const{t}=useTranslation();
    return (
        <>
            <section className="container p-0">
                <div className="row g-4 g-lg-5 justify-content-center p-0 " >
                    <div style={{ position: "relative", maxWidth: "90%", maxHeight: "100%" }} className=" justify-content-center mt-0  p-0">
                        <img style={{ borderRadius: '8px' }} className="p-0" src="assets/images/myImages/homepagePhoto.jpg" alt="" />
                        <div class="gradiant"></div>
                        <h1 style={{ position: "absolute", top: "30%", left: "5%", zIndex: 20, color: "white" }}>{t("PICK")}<br />{t("OWN_RIDE")}</h1>
                    </div>
                    <HeroSearchComponent preLoadStore={false} colN={11}/>
                </div>
            </section>

        </>
    );
}
