import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n/config'
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './i18n/LanguageProvider';
import MaintenanceWrapper from './pages/MaintenanceWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient(); // Create QueryClient instance

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {},
        components: {},
      }}
    >
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <MaintenanceWrapper>
            <App />
          </MaintenanceWrapper>
        </LanguageProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
