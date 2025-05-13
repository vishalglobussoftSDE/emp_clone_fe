import { useState } from 'react';
import { FaChartBar, FaClock, FaCamera, FaHistory, FaAppStore, FaRocket } from 'react-icons/fa';

const DashboardHeadersComp = () => {
  const [activeButton, setActiveButton] = useState('productivity'); // State to track active button

  // Function to handle active button change
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="border p-[25px]">
      <div className="wrapper flex gap-6 justify-between items-center">
        {/* Productivity */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleButtonClick('productivity')}
            className={`flex items-center gap-2 p-2 rounded-md ${
              activeButton === 'productivity' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            } transition-all`}
          >
            <FaChartBar className="text-xl" />
            <span>Productivity</span>
          </button>
        </div>

        {/* TimeSheets */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleButtonClick('timesheets')}
            className={`flex items-center gap-2 p-2 rounded-md ${
              activeButton === 'timesheets' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            } transition-all`}
          >
            <FaClock className="text-xl" />
            <span>TimeSheets</span>
          </button>
        </div>

        {/* Screenshots */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleButtonClick('screenshots')}
            className={`flex items-center gap-2 p-2 rounded-md ${
              activeButton === 'screenshots' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            } transition-all`}
          >
            <FaCamera className="text-xl" />
            <span>Screenshots</span>
          </button>
        </div>

        {/* Web History */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleButtonClick('webhistory')}
            className={`flex items-center gap-2 p-2 rounded-md ${
              activeButton === 'webhistory' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            } transition-all`}
          >
            <FaHistory className="text-xl" />
            <span>Web History</span>
          </button>
        </div>

        {/* App History */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleButtonClick('apphistory')}
            className={`flex items-center gap-2 p-2 rounded-md ${
              activeButton === 'apphistory' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            } transition-all`}
          >
            <FaAppStore className="text-xl" />
            <span>App History</span>
          </button>
        </div>

        {/* Key Strokes */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleButtonClick('keystrokes')}
            className={`flex items-center gap-2 p-2 rounded-md ${
              activeButton === 'keystrokes' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            } transition-all`}
          >
            <FaRocket className="text-xl" />
            <span>Key Strokes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeadersComp;
