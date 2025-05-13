import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './context/sidebarContext';
import MainLayout from './components/MainLayout';
import DashboardPage from './pages/DashboardPage';
import NotificationsPage from './pages/NotificationsPage';
import TimeClaimPage from './pages/TimeClaimPage';
import MainLayoutHRMS from './components/MainLayoutHRMS';
import MainButton from './components/Button/MainButton';
import Attendence from './pages/HRMSPages/Attendence';

const App = () => {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            }
          />
          <Route
            path="/notifications"
            element={
              <MainLayout>
                <NotificationsPage />
              </MainLayout>
            }
          />
          <Route
            path="/timeclaim"
            element={
              <MainLayout>
                <TimeClaimPage />
              </MainLayout>
            }
          />
          <Route
            path="/hrms/attendence"
            element={
              <MainLayoutHRMS>
                <Attendence/>
              </MainLayoutHRMS>
            }
          />
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;
