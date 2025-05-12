import { FaHome, FaBell, FaSyncAlt } from 'react-icons/fa';

const PrimarySideBar = () => {
  return (
    <div className="w-[200px] h-screen bg-white border-r border-gray-300 shadow-sm">
      {/* Logo Section */}
      <div className="flex justify-center items-center p-4 border-b border-gray-200">
        <img src="/empmonitorlogo.png" alt="EMP Monitor Logo" className="h-6" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-6 p-4 text-gray-700">
        {/* Dashboard */}
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl"><FaHome /></div>
          <div className="text-base font-medium">Dashboard</div>
        </div>

        {/* Alerts/Notifications */}
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl"><FaBell /></div>
          <div className="text-base font-medium">Notifications</div>
        </div>

        {/* Time Claim / Transfer */}
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <div className="text-xl"><FaSyncAlt /></div>
          <div className="text-base font-medium">Time Claim</div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySideBar;
