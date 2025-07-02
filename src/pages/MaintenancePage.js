import { Result } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function MaintenancePage() {
    const { t } = useTranslation();

    return (
        <Result
            status="500"
            title={t("We'll be back soon!")}
            subTitle={t("The website is under maintenance.")}
        />
    )
}
