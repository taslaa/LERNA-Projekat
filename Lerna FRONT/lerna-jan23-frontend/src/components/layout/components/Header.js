import { observer } from "mobx-react-lite";
import { useSSR, useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import AuthService from "../../../data/services/AuthService";
import MyProfileNavbar from "./MyProfileNavbar";
import Notifications from "./Notifications";
import loggedStore from "../../../data/stores/LoggedStore";
import AddCircleIcon from "./Icons/AddCircleIcon";
import SearchIcon from "./Icons/SearchIcon";
import InfoIcon from "./Icons/InfoIcon";
import LoginFillIcon from "./Icons/LoginFillIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import MenuIcon from "./Icons/MenuIcon";



const Header = observer(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const [isWavy, setIsWavy] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const signOut = () => {
    AuthService.signOut();
    navigate("/sign-in");
  };
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    setIsWavy(location.pathname === "/" && windowWidth > 1060);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth, location.pathname]);



  return (
    <>
      {isWavy && <svg className="blob" viewBox="0 0 200 100">
        <path className="path" d="M0 100 V60 Q30 45 60 60 Q90 75 120 60 Q150 45 180 60 Q210 75 240 60 Q270 45 300 60 V100 Z" fill="#900fc8" stroke="none" />
      </svg>}
      <div className="bg-purple mw-100 mh-auto">
        <section className="container  p-0">
          <div className="row g-4 g-lg-5 justify-content-center bg-purple p-0 " >
            <div style={{ position: "relative", maxWidth: "90%", maxHeight: "100%" }} className=" justify-content-center mt-0  p-0">
              <header className="navbar-light mt-5 ">
                <nav className="navbar navbar-expand-lg bg-purple ">
                  <div className="container p-0 m-0 mw-100" >
                    <a className="navbar-brand col-4 " onClick={() => navigate("/")}>
                      <img className="light-mode-item navbar-brand-item larger" src="/assets/images/logo-light.svg" alt="logo" />
                    </a>

                    <button
                      className="navbar-toggler ms-sm-auto me-md-0 p-0 p-sm-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarCategoryCollapse"
                      aria-controls="navbarCategoryCollapse"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="mb-1 me-2 navbar-toggler-animation">
                        <MenuIcon color="white" size="25"></MenuIcon>
                      </span>
                      <span style={{ color: "white" }} className="d-none d-sm-inline-block small font">{t("MENU")}</span>
                    </button>

                    <div className="navbar-collapse col-auto collapse px-0" id="navbarCategoryCollapse">
                      <ul className="navbar-nav navbar-nav-scroll nav-pills-primary-soft text-center ms-auto p-2 p-xl-0 bg-purple ">
                        <li className="nav-item m-2 d-flex">
                          {" "}
                          <div className="mt-2">
                            <a style={{ color: "white" }} className="nav-link " href="#">
                              <SearchIcon size="20" color="white"></SearchIcon>
                              <span className="ms-2">{t("SEARCH")}</span>
                            </a>{" "}
                          </div>
                        </li>
                        <li className="nav-item  m-2 d-flex">
                          {" "}
                          <div className="mt-2"  onClick={() => navigate("/rides/create")}>
                            <a style={{ color: "white" }} className="nav-link" href="#">
                              <AddCircleIcon size="20" color="white"></AddCircleIcon>
                              <span className="ms-2">{t("POST_RIDE")}</span>
                            </a>{" "}
                          </div>
                        </li>
                        <li className="nav-item  m-2 d-flex">
                          {" "}
                          <div className="mt-2">
                            <a style={{ color: "white" }} className="nav-link" href="#">
                              <InfoIcon size="20" color="white"></InfoIcon>
                              <span className="ms-2">{t("INFO_CENTER")}</span>
                            </a>{" "}
                          </div>
                        </li>
                        <li className={`nav-item m-2 me-0 pe-0 d-flex ${loggedStore.isLogged ? "d-none" : ""}`}>
                          {" "}
                          <div className="mt-2">
                            <a style={{ color: "#FDDC00" }} className="nav-link " onClick={() => navigate("/sign-in")} href="#">
                              <LoginFillIcon size="20" color="white"></LoginFillIcon>
                              <span className="ms-2">Sign in</span>
                            </a>{" "}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className={`nav col align-items-center mt-2 col-auto list-unstyled ms-xl-auto`}>
                      <LanguageSwitcher />
                      <div className={`${!loggedStore.isLogged ? "d-none" : ""}`}>
                              <MyProfileNavbar></MyProfileNavbar>
                      </div>
                    </ul>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </section>
      </div>
    </>

  );
}
)

export default Header;