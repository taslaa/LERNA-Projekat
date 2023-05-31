import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

export default function ActionRoute({ route, labelKey }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    return <li className="nav-item">
        <a href="#" className={`nav-link ${location.pathname === route ? "active" : ""}`} onClick={() => navigate(route)}>
            {t(labelKey)}
        </a>
    </li>
};
