import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import httpClient from '../api/httpClient';
import { message, Result, Spin } from 'antd';
import { debounce } from 'lodash';
import { Route, Router, Routes } from 'react-router';
import MaintenancePage from './MaintenancePage';
import { BrowserRouter } from 'react-router-dom';
import MaintenanceLoginPage from './MaintenanceLoginPage';

const MaintenanceWrapper = ({ children }) => {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [loading, setLoading] = useState(true);

  const healthCheck = useCallback(async () => {
    const key = localStorage.getItem("maintenance_key");

    if (key) {
      try {
        const res = await httpClient.post("/settings/maintenance-key/verify", { key })

        if (res?.status === 200 && res?.data?.code === 200 && res?.data?.data?.isValid) {
          localStorage.setItem("maintenance_key", key);

          setIsMaintenance(false);
          setLoading(false);
          return;
        } else {
          message.error(res?.data?.message || "Internal Server Error!");
        }
      } catch (error) {
        message.error(error?.message || "Internal Server Error!");
      }
    }

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
    return <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MaintenanceLoginPage healthCheck={healthCheck} />} />
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  }

  return <>{children}</>;
};

export default MaintenanceWrapper;
