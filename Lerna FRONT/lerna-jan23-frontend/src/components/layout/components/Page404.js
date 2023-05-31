import { t } from "i18next"
import { useNavigate } from "react-router-dom"

export default function Page404() {
const navigate = useNavigate();
    return (

        <div className="row mt-9">
            <div className="col-md-4 mt-md-9 "></div>
            <div className="col-auto">
                <img src="/assets/images/404.svg" className="h-500px mx-auto" alt=""/>
                <h2 className="mt-0">Ooops!</h2>
                <div>
                    <h4 className="form-label">{t("NO_FURTHER") + " " + t("DRIVE") + " "}
                        <a href="#" onClick={()=>navigate("/")}  style={{textDecoration: "underline", color:"#900fc8"}}>{t("BACK")}</a>
                    </h4>
                </div>
            </div>
        </div>
    )

} 