import { FaHome, FaBell, FaSyncAlt } from 'react-icons/fa';

const PrimarySideBar = ({ collapsed }) => {
  return (
    <div
      className={`h-screen bg-white border-r border-gray-300 shadow-sm transition-all duration-300 ${
        collapsed ? 'w-[70px]' : 'w-[200px]'
      }`}
    >
      {/* Logo Section - show only if not collapsed */}
      {!collapsed && (
        <div className="flex justify-center items-center p-4 border-b border-gray-200">
          <img src="/empmonitorlogo.png" alt="EMP Monitor Logo" className="h-12" />
        </div>
      )}

      {/* Navigation Items */}
      <div className="flex flex-col gap-6 p-4 text-gray-700">
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl"><FaHome /></div>
          {!collapsed && <div className="text-base font-medium">Dashboard</div>}
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl"><FaBell /></div>
          {!collapsed && <div className="text-base font-medium">Notifications</div>}
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl"><FaSyncAlt /></div>
          {!collapsed && <div className="text-base font-medium">Time Claim</div>}
        </div>
      </div>
    </div>
  );
};

export default PrimarySideBar;
