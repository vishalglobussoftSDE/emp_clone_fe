import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './context/sidebarContext';
import MainLayout from './components/MainLayout';
import DashboardPage from './pages/DashboardPage';
import NotificationsPage from './pages/NotificationsPage';
import TimeClaimPage from './pages/TimeClaimPage';

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
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;
