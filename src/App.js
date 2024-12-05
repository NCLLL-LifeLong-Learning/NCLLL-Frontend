import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';

const WebDefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));
const WebHomePage = React.lazy(() => import('./pages/HomePage'));

const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Website */}
        <Route element={<WebDefaultLayout />}>
          <Route path='/' element={<Suspense><WebHomePage /></Suspense>} />
        </Route>

        {/* Admin */}
        {/* <Route>
          <Route path='/' element={<HomePage />} />
        </Route> */}

        <Route path="*" element={<Suspense><NotFoundPage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
