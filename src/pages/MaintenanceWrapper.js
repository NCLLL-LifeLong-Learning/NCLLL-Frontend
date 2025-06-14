import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import httpClient from '../api/httpClient';
import { Result, Spin } from 'antd';
import { debounce } from 'lodash';

const MaintenanceWrapper = ({ children }) => {
  const { t } = useTranslation();
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [loading, setLoading] = useState(true);

  const healthCheck = useCallback(async () => {
    await httpClient.get('/settings')
      .then(response => response.data)
      .then(res => {
        if (res.code === 200) {
          setIsMaintenance(res?.data?.maintenanceMode);
        } else {
          setIsMaintenance(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching maintenance mode:', error);
        setIsMaintenance(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  const debounceHealthCheck = useCallback(debounce(healthCheck, 300), [healthCheck])

  useEffect(() => {
    debounceHealthCheck();

    return debounceHealthCheck.cancel
  }, [debounceHealthCheck]);

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
