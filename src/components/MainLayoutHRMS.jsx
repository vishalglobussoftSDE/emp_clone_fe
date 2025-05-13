import Navbar from '../components/HRMSComponents/Navbar';
import Sidebar from '../components/HRMSComponents/Sidebar';

const MainLayoutHRMS = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Left fixed column */}
      <Sidebar />

      {/* Main content area - Full width */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-4 overflow-auto flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayoutHRMS;
