import { FaInfoCircle, FaBars, FaExpand, FaUser, FaDesktop } from 'react-icons/fa';
import { useState } from 'react';
import { useSidebar } from '../../context/sidebarContext'; // Use this context for sidebar toggle
import { useNavigate } from 'react-router-dom';


const MainNavbar = () => {
  const { toggleSidebar } = useSidebar();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate(); // ✅ useNavigate for programmatic navigation

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleHRMSClick = () => {
   window.open('/hrms/attendence', '_blank'); // ✅ navigate to the route
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Left section */}
      <div className="flex gap-6 items-center text-gray-700 font-medium">
        <div onClick={toggleSidebar} className="cursor-pointer">
          <FaBars className="text-gray-700 text-xl" />
        </div>    
        <div onClick={toggleFullscreen} className="cursor-pointer">
          <FaExpand className="text-gray-700 text-xl" />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <div className="flex items-center gap-2">
          <FaInfoCircle className="text-blue-500 text-lg" />
          <div>Help</div>
        </div>
        <div>
          <FaDesktop className="text-blue-500 text-lg" />
        </div>
        <div>
          {/* ✅ Button that navigates on click */}
          <button
            onClick={handleHRMSClick}
            className="bg-purple-500 text-white px-3 py-1 rounded"
          >
            HRMS
          </button>
        </div>
        <div>Welcome</div>
        <div className="text-right flex items-center gap-2">
          <div className="font-semibold">Vishal</div>
          <FaUser className="text-gray-700 text-lg" />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;