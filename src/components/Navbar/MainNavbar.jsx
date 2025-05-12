import { FaInfoCircle, FaBars, FaExpand, FaUser, FaDesktop } from 'react-icons/fa';
import { useState } from 'react';
import { useSidebar } from '../../context/sidebarContext'; // Use this context for sidebar toggle

const MainNavbar = () => {
  const { toggleSidebar } = useSidebar(); // Get toggle function from context
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Left section */}
      <div className="flex gap-6 items-center text-gray-700 font-medium">
        {/* Toggle Sidebar */}
        <div onClick={toggleSidebar} className="cursor-pointer">
          <FaBars className="text-gray-700 text-xl" />
        </div>
        {/* Toggle Fullscreen */}
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
        <div>HRMS</div>
        <div>Welcome</div>

        {/* Profile */}
        <div className="text-right flex items-center gap-2">
          <div className="font-semibold">Vishal</div>
          <FaUser className="text-gray-700 text-lg" />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
