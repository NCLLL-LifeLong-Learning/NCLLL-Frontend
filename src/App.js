import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import GuardLayout from './layouts/GuardLayout';
import { aboutUs, focusArea, program, resources } from './constants/Route';
import { MODULES_TYPE, RESOURCE_TYPE } from './constants/Bridge';
import ResourcePage from './pages/Website/Documents/ResourcePage';
import AllResourcePage from './pages/Website/Documents/AllResourcePage';
import DynamicModulePage from './pages/Website/DynamicModulePage';

const WebDefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));
const WebDetailsLayout = React.lazy(() => import('./layouts/DetailsLayout'));

const WebHomePage = React.lazy(() => import('./pages/Website/HomePage'));

const KeyFunctionsPage = React.lazy(() => import('./pages/Website/AboutUs/KeyFunctions'));
const MissionAndVisionPage = React.lazy(() => import('./pages/Website/AboutUs/MissionAndVision'));
const MemberMinistriesPage = React.lazy(() => import('./pages/Website/AboutUs/MemberMinistries'));
const GoverningBoardPage = React.lazy(() => import('./pages/Website/AboutUs/GoverningBoard'));
const GoverningDetailPage = React.lazy(() => import('./pages/Website/AboutUs/GoverningDetail'));
const ContactUsPage = React.lazy(() => import('./pages/Website/AboutUs/ContactUs'));
const SecretariatGeneralOfNLLLPage = React.lazy(() => import('./pages/Website/AboutUs/SGLLL'));

const EngagementPage = React.lazy(() => import('./pages/Website/Program/Engagement'));

const LifelongLearningForAllPage = React.lazy(() => import('./pages/Website/FocusArea/LifelongLearningForAll'));

const DynamicDetailPage = React.lazy(() => import('./pages/Website/Documents/DynamicDetailPage'));

const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website */}
        <Route element={<Suspense><WebDefaultLayout /></Suspense>}>
          <Route path='/' element={<Suspense><WebHomePage /></Suspense>} />

          <Route element={<Suspense><WebDetailsLayout /></Suspense>}>

            <Route path='/about-us' element={<GuardLayout description={aboutUs.description} title={aboutUs.title} route={aboutUs.route} />}>
              <Route index path='mission' element={<Suspense><MissionAndVisionPage /></Suspense>} />

              <Route path='key' element={<Suspense><KeyFunctionsPage /></Suspense>} />

              <Route path='member' element={<Suspense><MemberMinistriesPage /></Suspense>} />

              <Route path='board' element={<Suspense><GoverningBoardPage /></Suspense>} />

              <Route path='board/:id' element={<Suspense><GoverningDetailPage /></Suspense>} />

              <Route path='sglll' element={<Suspense><SecretariatGeneralOfNLLLPage /></Suspense>} />

              <Route path='contact' element={<Suspense><ContactUsPage /></Suspense>} />
            </Route>

            <Route path='/program' element={<GuardLayout description={program.description} title={program.title} route={program.route} />}>
              <Route path='engagement' element={<Suspense><EngagementPage /></Suspense>} />

              <Route path=':id' element={<Suspense><DynamicModulePage module={MODULES_TYPE.PROGRAM} /></Suspense>} />
            </Route>

            <Route path='/focus-area' element={<GuardLayout description={focusArea.description} title={focusArea.title} route={focusArea.route} />}>
              <Route index path='all' element={<Suspense><LifelongLearningForAllPage /></Suspense>} />

              <Route path=':id' element={<Suspense><DynamicModulePage module={MODULES_TYPE.FOCUS_AREA}  /></Suspense>} />
            </Route>

            <Route path='/resources' element={<GuardLayout description={resources.description} title={resources.title} route={resources.route} />}>

              <Route element={<AllResourcePage />} index />
              <Route path=':type' element={<ResourcePage />} />

              <Route path=':type/:id' element={<Suspense><DynamicDetailPage type={RESOURCE_TYPE.event} /></Suspense>} />
            </Route>
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
