import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';

const WebDefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));
const WebDetailsLayout = React.lazy(() => import('./layouts/DetailsLayout'));
const WebHomePage = React.lazy(() => import('./pages/Website/HomePage'));
const WebOurProgramPage = React.lazy(() => import('./pages/Website/Details/OurProgramPage'));

const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website */}
        <Route element={<Suspense><WebDefaultLayout /></Suspense>}>
          <Route path='/' element={<Suspense><WebHomePage /></Suspense>} />

          <Route element={<Suspense><WebDetailsLayout /></Suspense>}>
            <Route path='/program' element={<Suspense><WebOurProgramPage /></Suspense>} />
          </Route>

          <Route element={<Suspense><WebDetailsLayout /></Suspense>}>
            <Route path='/aboutus' element={<Suspense><WebOurProgramPage /></Suspense>} />
          </Route>
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
