import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './context/sidebarContext';
import MainLayout from './components/MainLayout';
import DashboardPage from './pages/DashboardPage';

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
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;
