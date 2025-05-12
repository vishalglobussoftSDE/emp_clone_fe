import { FaHome, FaBell, FaSyncAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importing Link for routing
import { useSidebar } from '../../context/sidebarContext.jsx';

const PrimarySideBar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`w-[200px] h-screen bg-white border-r border-gray-300 shadow-sm transition-all duration-300`}
    >
      {/* Logo Section - hidden when collapsed */}
      <div className="flex justify-center items-center p-4 border-b border-gray-200 h-[60px]">
        {isSidebarOpen && (
          <img src="/empmonitorlogo.png" alt="EMP Monitor Logo" className="h-6" />
        )}
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-6 p-4 text-gray-700">
        {/* Dashboard */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl">
            <FaHome />
          </div>
          {isSidebarOpen && <div className="text-base font-medium">Dashboard</div>}
        </Link>

        {/* Notifications */}
        <Link to="/notifications" className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl">
            <FaBell />
          </div>
          {isSidebarOpen && <div className="text-base font-medium">Notifications</div>}
        </Link>

        {/* Time Claim */}
        <Link to="/timeclaim" className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl">
            <FaSyncAlt />
          </div>
          {isSidebarOpen && <div className="text-base font-medium">Time Claim</div>}
        </Link>
      </div>
    </div>
  );
};

export default PrimarySideBar;
