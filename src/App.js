import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import GuardLayout from './layouts/GuardLayout';
import { aboutUs, focusArea, program, resources } from './constants/Route';

const WebDefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));
const WebDetailsLayout = React.lazy(() => import('./layouts/DetailsLayout'));

const WebHomePage = React.lazy(() => import('./pages/Website/HomePage'));

const KeyFunctionsPage = React.lazy(() => import('./pages/Website/AboutUs/KeyFunctions'));
const MissionAndVisionPage = React.lazy(() => import('./pages/Website/AboutUs/MissionAndVision'));
const MemberMinistriesPage = React.lazy(() => import('./pages/Website/AboutUs/MemberMinistries'));
const GoverningBoardPage = React.lazy(() => import('./pages/Website/AboutUs/GoverningBoard'));
const ContactUsPage = React.lazy(() => import('./pages/Website/AboutUs/ContactUs'));
const SecretariatGeneralOfNLLLPage = React.lazy(() => import('./pages/Website/AboutUs/SGLLL'));

const EngagementPage = React.lazy(() => import('./pages/Website/Program/Engagement'));
const LifelongLearningCenterPage = React.lazy(() => import('./pages/Website/Program/LifelongLearningCenter'));
const LifelongLearningCityPage = React.lazy(() => import('./pages/Website/Program/LifelongLearningCity'));
const LifelongLearningClubPage = React.lazy(() => import('./pages/Website/Program/LifelongLearningClub'));
const NationalLifelongLearningForumPage = React.lazy(() => import('./pages/Website/Program/NationalLifelongLearningForum'));

const AccreditationAndRecognitionPage = React.lazy(() => import('./pages/Website/FocusArea/AccreditationAndRecognition'));
const CollaborationAndSupportPage = React.lazy(() => import('./pages/Website/FocusArea/CollaborationAndSupport'));
const ComprehensiveAndFlexibleLearningProgramPage = React.lazy(() => import('./pages/Website/FocusArea/ComprehensiveAndFlexibleLearningProgram'));
const LifelongLearningEnvironmentPage = React.lazy(() => import('./pages/Website/FocusArea/LifelongLearningEnvironment'));
const ProfessionalDevelopmentPage = React.lazy(() => import('./pages/Website/FocusArea/ProfessionalDevelopment'));
const LifelongLearningForAllPage = React.lazy(() => import('./pages/Website/FocusArea/LifelongLearningForAll'));

const AllResourcesPage = React.lazy(() => import('./pages/Website/Resources/Resources'));
const LegalDocumentPage = React.lazy(() => import('./pages/Website/Resources/LegalDocument'));
const PolicyAndStrategyPage = React.lazy(() => import('./pages/Website/Resources/PolicyAndStrategy'));
const AdministrationPage = React.lazy(() => import('./pages/Website/Resources/Administration'));
const ReportAndPublicationsPage = React.lazy(() => import('./pages/Website/Resources/ReportAndPublications'));
const NewsAndEventsPage = React.lazy(() => import('./pages/Website/Resources/NewsAndEvents'));




const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website */}
        <Route element={<Suspense><WebDefaultLayout /></Suspense>}>
          <Route path='/' element={<Suspense><WebHomePage /></Suspense>} />

          <Route element={<Suspense><WebDetailsLayout /></Suspense>}>
            <Route path='/resources' element={<GuardLayout description={resources.description} title={resources.title} route={resources.route} />}>
              <Route index path='all' element={<Suspense><AllResourcesPage /></Suspense>} />

              <Route path='legal-document' element={<Suspense><LegalDocumentPage /></Suspense>} />

              <Route path='administration' element={<Suspense><AdministrationPage /></Suspense>} />

              <Route path='policy-and-strategy' element={<Suspense><PolicyAndStrategyPage /></Suspense>} />

              <Route path='projects' element={<Suspense><GoverningBoardPage /></Suspense>} />

              <Route path='news-and-events' element={<Suspense><NewsAndEventsPage /></Suspense>} />

              <Route path='report-and-publications' element={<Suspense><ReportAndPublicationsPage /></Suspense>} />
            </Route>
            <Route path='/about-us' element={<GuardLayout description={aboutUs.description} title={aboutUs.title} route={aboutUs.route} />}>
              <Route index path='mission' element={<Suspense><MissionAndVisionPage /></Suspense>} />

              <Route path='key' element={<Suspense><KeyFunctionsPage /></Suspense>} />

              <Route path='member' element={<Suspense><MemberMinistriesPage /></Suspense>} />

              <Route path='member' element={<Suspense><MemberMinistriesPage /></Suspense>} />

              <Route path='board' element={<Suspense><GoverningBoardPage /></Suspense>} />

              <Route path='sglll' element={<Suspense><SecretariatGeneralOfNLLLPage /></Suspense>} />

              <Route path='contact' element={<Suspense><ContactUsPage /></Suspense>} />
            </Route>

            <Route path='/program' element={<GuardLayout description={program.description} title={program.title} route={program.route} />}>
              <Route index path='forum' element={<Suspense><NationalLifelongLearningForumPage /></Suspense>} />

              <Route path='center' element={<Suspense><LifelongLearningCenterPage /></Suspense>} />

              <Route path='club' element={<Suspense><LifelongLearningClubPage /></Suspense>} />

              <Route path='city' element={<Suspense><LifelongLearningCityPage /></Suspense>} />

              <Route path='engagement' element={<Suspense><EngagementPage /></Suspense>} />
            </Route>

            {/* <Route path='/program' element={<GuardLayout description={program.description} title={program.title} route={program.route} />}>
              <Route index path='forum' element={<Suspense><NationalLifelongLearningForumPage /></Suspense>} />

              <Route path='center' element={<Suspense><LifelongLearningCenterPage /></Suspense>} />

              <Route path='club' element={<Suspense><LifelongLearningClubPage /></Suspense>} />

              <Route path='city' element={<Suspense><LifelongLearningCityPage /></Suspense>} />

              <Route path='engagement' element={<Suspense><EngagementPage /></Suspense>} />
            </Route> */}

            <Route path='/focus-area' element={<GuardLayout description={focusArea.description} title={focusArea.title} route={focusArea.route} />}>
              <Route index path='all' element={<Suspense><LifelongLearningForAllPage /></Suspense>} />

              <Route path='professional' element={<Suspense><ProfessionalDevelopmentPage /></Suspense>} />

              <Route path='environment' element={<Suspense><LifelongLearningEnvironmentPage /></Suspense>} />

              <Route path='comprehensive-flexible' element={<Suspense><ComprehensiveAndFlexibleLearningProgramPage /></Suspense>} />

              <Route path='collaboration-support' element={<Suspense><CollaborationAndSupportPage /></Suspense>} />

              <Route path='accreditation-recognition' element={<Suspense><AccreditationAndRecognitionPage /></Suspense>} />
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
