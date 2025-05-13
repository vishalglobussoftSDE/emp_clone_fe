import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Attendance');

  const tabs = ['Attendance', 'Leaves', 'Holidays'];

  return (
    <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
      {/* Tabs */}
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium px-3 py-1 rounded-md ${
              activeTab === tab
                ? 'bg-gray-100 text-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Side: Role, Name, Avatar */}
      <div className="flex items-center gap-3">
        <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-md">Employee</span>
        <span className="text-sm text-gray-500">Vishal</span>
        <div className="w-8 h-8 rounded-md bg-cyan-100 flex items-center justify-center text-cyan-700 font-semibold">
          V
        </div>
      </div>
    </div>
  );
};

export default Navbar;
