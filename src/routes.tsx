import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import TreatmentDetail from './pages/TreatmentDetail';
import Journey from './pages/Journey';
import Laboratory from './pages/Laboratory';
import Chambers from './pages/Chambers';
import ChamberDetail from './pages/ChamberDetail';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import Learning from './pages/Learning';
import Contact from './pages/Contact';
import Ethics from './pages/Ethics';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/treatments', element: <Treatments /> },
      { path: '/treatments/:slug', element: <TreatmentDetail /> },
      { path: '/journey', element: <Journey /> },
      { path: '/laboratory', element: <Laboratory /> },
      { path: '/chambers', element: <Chambers /> },
      { path: '/chambers/:slug', element: <ChamberDetail /> },
      { path: '/stories', element: <Stories /> },
      { path: '/stories/:slug', element: <StoryDetail /> },
      { path: '/learning', element: <Learning /> },
      { path: '/learning/videos', element: <Learning /> },
      { path: '/learning/articles', element: <Learning /> },
      { path: '/contact', element: <Contact /> },
      { path: '/ethics', element: <Ethics /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
