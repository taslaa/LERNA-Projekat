import { useTranslation } from "react-i18next";
import ActionRoute from "./ActionRoute";

export default function NestedActionRoute({ sectionKey, links, isExpanded }) {
    const targetName = "collapse" + sectionKey;
    const { t } = useTranslation();
    return (
        <>
            <li className="nav-item">
                <a className="nav-link collapsed " data-bs-toggle="collapse" href={`#${targetName}`} role="button" >
                    {t(sectionKey)}
                </a>
                <ul className={`nav collapsed flex-column ${isExpanded === true ? "show" : ""}`} id={`${targetName}`} data-bs-parent="#navbar-sidebar">
                    {links.map((el) => {
                        return <ActionRoute key={el.route} route={el.route} labelKey={el.labelKey} ></ActionRoute>
                    })}
                </ul>
            </li>
        </>
    );
};