// Sidebar.jsx
import { FaUser, FaCalendarCheck, FaFileInvoiceDollar, FaFileAlt, FaBuilding } from 'react-icons/fa';
import { BsBarChartLine } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="w-20 md:w-60 bg-[#1A192A] min-h-screen flex flex-col items-center py-6 text-white">
      {/* Logo */}
      <div className="mb-10 flex flex-col items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-bold text-xl">HR</span>
        </div>
        <div className="text-sm mt-2">HRMS</div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-8 text-center">
        <div className="flex flex-col items-center gap-1 text-purple-300 hover:text-white cursor-pointer">
          <FaUser size={20} />
          <span className="text-xs">My Profile</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-purple-300 hover:text-white cursor-pointer">
          <FaCalendarCheck size={20} />
          <span className="text-xs">Attendance</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-purple-300 hover:text-white cursor-pointer">
          <BsBarChartLine size={20} />
          <span className="text-xs text-center">Tax Declaration</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-purple-300 hover:text-white cursor-pointer">
          <FaFileInvoiceDollar size={20} />
          <span className="text-xs">Payslip</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-purple-300 hover:text-white cursor-pointer">
          <FaBuilding size={20} />
          <span className="text-xs text-center">Employee Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
