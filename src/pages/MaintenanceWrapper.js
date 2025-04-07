import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../i18n/LanguageProvider';
import { useQuery } from '@tanstack/react-query';
import httpClient from '../api/httpClient';
import { Result, Spin } from 'antd';

const MaintenanceWrapper = ({ children }) => {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    httpClient.get('/settings')
      .then(response => response.data)
      .then(res => {
        console.log(res);
        if (res.code === 200) {
          setIsMaintenance(res?.data?.maintenanceMode);
        } else {
          setIsMaintenance(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching maintenance mode:', error);
      })
      .finally(() => {
        setLoading(false);
      })
      ;
  }, []);

  if (loading) return <Spin spinning={true} fullscreen />

  if (isMaintenance) {
    return <Result
      status="500"
      title={t("We'll be back soon!")}
      subTitle={t("The website is under maintenance.")}
    />
  }

  return <>{children}</>;
};

export default MaintenanceWrapper;
