import React from 'react'
import { useTranslation } from "react-i18next";

export default function ValidationErrors({ errors }) {
    const { t } = useTranslation();

    const keys = [];

    errors.forEach(error => {
        error.errorCodes.forEach(errorCode => {
            keys.push(error.propertyName + "_" + errorCode);
        });
    });

    return (
        <div>
            {keys.map((key, index) =>
                <p key={index}>{t(key)}</p>
            )}
        </div>
    )
}
