import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import AuthService from "../../../data/services/AuthService";
import ActionRoute from "./ActionRoute";
import NestedActionRoute from "./NestedActionRoute";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const signOut = () => {
    AuthService.signOut();
    navigate("/sign-in");
  };

  const routes = [
    { route: '/admin', labelKey: 'DASHBOARD' },
    {
      sectionKey: 'SETTINGS',
      links: [
        { route: '/admin/cities', labelKey: t('CITIES') },
        { route: '/admin/countries', labelKey: t('COUNTRIES') },
        { route: '/admin/vehicleBrands', labelKey: t('VEHICLE_BRANDS') },
        { route: '/admin/vehicleModels', labelKey: t('VEHICLE_MODELS')},
        { route: '/admin/conditions', labelKey: t('CONDITIONS')},
        { route: '/admin/reportTypes', labelKey: t('REPORT_TYPES')},
        { route: '/admin/reports', labelKey: t('REPORTS')},
        { route: '/admin/travelPreferences', labelKey: t('TRAVEL_PREFERENCES')},
        { route: '/admin/users', labelKey: t('USERS')}
      ]
    },
  ];

  useEffect(() => {
    routes.forEach((r) => {
      if (location.pathname.startsWith(r.route)) {
        setIsExpanded(true);
        return;
      }
    });
  }, []);
  return (
    <nav className="navbar sidebar navbar-expand-xl navbar-light">
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="/">
          <img className="light-mode-item navbar-brand-item" src="/assets/images/logo.svg" alt="logo" />
          <img className="dark-mode-item navbar-brand-item" src="/assets/images/logo-light.svg" alt="logo" />
        </a>
      </div>

      <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabndex="-1" id="offcanvasSidebar">
        <div className="offcanvas-body sidebar-content d-flex flex-column pt-4">
        <ul className="navbar-nav flex-column" id="navbar-sidebar">
            {
              routes.map((route) => {
                if (!route.sectionKey) {
                  return <ActionRoute route={route.route} labelKey={route.labelKey} key={route.route}></ActionRoute>
                }
                else {
                  return <NestedActionRoute key={route.sectionKey} sectionKey={route.sectionKey} links={route.links} isExpanded={isExpanded}></NestedActionRoute>
                }
              })
            }
          </ul>
          <div className="d-flex align-items-center justify-content-between text-primary-hover mt-auto p-3">
            <a className="h6 fw-light mb-0 text-body" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sign out" onClick={signOut}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </a>
            <a className="h6 mb-0 text-body" href="admin-settings.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Settings">
              <i className="bi bi-gear-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
