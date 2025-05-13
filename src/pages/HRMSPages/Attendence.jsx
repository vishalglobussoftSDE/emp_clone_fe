import { useState, useEffect } from "react";
import AttendanceTable from "../../components/HRMSComponents/AttendanceTable";

const generateMonthDates = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const formatted = date.toISOString().split("T")[0];
    dates.push({
      date: formatted,
      status: "---",
      checkIn: "---",
      checkOut: "---",
      total: "00:00:00",
    });
  }

  return dates;
};

const Attendence = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [currentCheck, setCurrentCheck] = useState("Check In");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });

  const handleCheckIn = () => {
    setIsCheckedIn(!isCheckedIn);
    setCurrentCheck(isCheckedIn ? "Check In" : "Check Out");
  };

  // Live Indian time using IST
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-IN", options);
      setCurrentTime(formatter.format(now));
    };

    updateTime(); // initial call
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const [year, month] = selectedMonth.split("-").map(Number);
  const attendanceData = generateMonthDates(year, month - 1);

  return (
    <div className="border rounded-md shadow-lg p-6 bg-white">
      <div className="wrapper space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-blue-600">
            Time: {currentTime}
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={handleCheckIn}
              className={`px-4 py-2 rounded-md text-sm font-medium text-white transition-all duration-300 ${
                isCheckedIn
                  ? "bg-green-600 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {currentCheck}
            </button>

            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border border-gray-300 text-gray-700 text-sm px-3 py-2 rounded-md outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <AttendanceTable data={attendanceData} />
        </div>
      </div>
    </div>
  );
};

export default Attendence;
