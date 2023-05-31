import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#4d4d4d" fill-opacity="1" d="M0,96L34.3,128C68.6,160,137,224,206,261.3C274.3,299,343,309,411,309.3C480,309,549,299,617,266.7C685.7,235,754,181,823,165.3C891.4,149,960,171,1029,186.7C1097.1,203,1166,213,1234,213.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>


      <footer class="footer" style={{ backgroundColor: 'rgb(77, 77, 77)' }}>
        <div className="container">
          <img className="h-60px mb-md-2" src="/assets/images/logo-light.svg" alt="logo" />
        </div>

        <div style={{ backgroundColor: 'rgb(77, 77, 77)'}}>
          <div class="container">
            <div class="row">
              <div class="container">
                <div class="d-lg-flex py-3 text-center text-lg-start">
                  <div className="col-xs-6 col-sm-3 col-lg-3">
                    <ul className="list-inline mb-0 mt-3" style={{ display: 'flex', flexDirection: 'column', color: 'RGB(179, 179, 177)' }}>
                      <h5 className="mb-2 mb-md-4" style={{ color: 'white' }}>{t("MOST_SEARCHED_ROUTES")}</h5>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          Sarajevo Mostar
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          Mostar Konjic
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          Široki Brijeg Mostar
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          Banja Luka Bihać
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          Sarajevo Doboj
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-lg-3 pe-0 ps-4">
                    <ul className="list-inline mb-0 mt-3" style={{ display: 'flex', flexDirection: 'column', color: 'RGB(179, 179, 177)' }}>
                      <h5 className="mb-2 mb-md-4" style={{ color: 'white' }}>{t("ABOUT_US")}</h5>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("HOW_VOZIME_WORKS")}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("ABOUT_US")}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("MEDIA")}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("NOTIFICATIONS")}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-lg-3">
                    <ul className="list-inline mb-0 mt-3" style={{ display: 'flex', flexDirection: 'column', color: 'RGB(179, 179, 177)' }}>
                      <h5 className="mb-2 mb-md-4" style={{ color: 'white' }}>{t("SUPPORT_FOOTER")}</h5>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("INFO_CENTER")}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("PAYMENT_SAFETY")}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("PRIVACY_POLICY")}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#" style={{ color: 'RGB(179, 179, 179)' }}>
                          {t("TERMS_OF_PAYMENT")}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-lg-3 pe-0 ps-4">
                    <ul className="list-inline mb-0 mt-3" style={{ display: 'flex', flexDirection: 'column', color: 'RGB(179, 179, 177)' }}>
                      <h5 className="mb-2 mb-md-4" style={{ color: 'white' }}>{t("GET_APP")}</h5>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#">
                          <img src="/assets/images/element/app-store.svg" alt="" style={{ height: '45px', width: 'auto', marginBottom: '5px', border: '1px solid RGB(175, 176, 180)', borderRadius: '3px' }} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a href="#">
                          <img src="/assets/images/element/google-play.svg" alt="" style={{ height: '45px', width: 'auto', marginBottom: '5px', border: '1px solid RGB(175, 176, 180)', borderRadius: '3px' }} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <hr class="mt-4 mb-0" />

        <div style={{ backgroundColor: 'rgb(51, 51, 51)' }}>
          <div class="container">
            <div class="row">
              <div class="container">
                <div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
                  <div className="col-md-3 ps-0">© 2023 VoziMe.ba</div>
                  <div className="col-md-6">{t("PAYMENT_SAFETY_MORE")}</div>
                  <div className="col-md-auto pe-0 pt-0">
                    <ul className="list-inline mb-0 mt-1 d-flex justify-content-center">
                      <li className="list-inline-item">
                        <a href="#">
                          <img src="/assets/images/element/paypal.svg" className="h-30px" alt="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <img src="/assets/images/element/visa.svg" className="h-30px" alt="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <img src="/assets/images/element/mastercard.svg" className="h-30px" alt="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <img src="/assets/images/element/expresscard.svg" className="h-30px" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </footer>
    </div>

  );
}
