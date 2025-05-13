import { useState, useEffect } from "react";
import AttendanceTable from "../../components/HRMSComponents/AttendanceTable";
import { FaCheckCircle } from "react-icons/fa";

const getISTTime = () => {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
};

const generateMonthDates = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const formatted = date.toISOString().split("T")[0];
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    dates.push({
      date: formatted,
      status: isWeekend ? "Week Off" : "---",
      checkIn: "---",
      checkOut: "---",
      total: "00:00:00",
    });
  }

  return dates;
};

const formatTime = (date) => {
  return date.toTimeString().split(" ")[0];
};

const calculateDuration = (start, end) => {
  const startTime = new Date(`1970-01-01T${start}Z`);
  const endTime = new Date(`1970-01-01T${end}Z`);
  const diffMs = endTime - startTime;
  if (diffMs < 0) return "00:00:00";

  const hours = String(Math.floor(diffMs / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((diffMs % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((diffMs % 60000) / 1000)).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const isDurationAtLeast8Hours = (duration) => {
  const [hrs] = duration.split(":").map(Number);
  return hrs >= 8;
};

const Attendence = () => {
  const [currentTime, setCurrentTime] = useState(getISTTime());
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });
  const [attendanceData, setAttendanceData] = useState([]);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  // Live clock updater
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getISTTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate fresh month data on month change
  useEffect(() => {
    const [year, month] = selectedMonth.split("-").map(Number);
    const newData = generateMonthDates(year, month - 1);
    setAttendanceData(newData);
    setHasCheckedInToday(false);
  }, [selectedMonth]);

  const handleCheck = () => {
    const today = new Date().toISOString().split("T")[0];
    const now = getISTTime();

    setAttendanceData((prevData) =>
      prevData.map((entry) => {
        if (entry.date === today && entry.status !== "Week Off") {
          // First-time check-in
          if (!hasCheckedInToday && entry.checkIn === "---") {
            setHasCheckedInToday(true);
            return {
              ...entry,
              checkIn: now,
              checkOut: "---",
              total: "00:00:00",
              status: "---",
            };
          }

          // Already checked in, now updating check-out and status
          if (hasCheckedInToday && entry.checkIn !== "---") {
            const total = calculateDuration(entry.checkIn, now);
            const isPresent = isDurationAtLeast8Hours(total);

            return {
              ...entry,
              checkOut: now,
              total,
              status: isPresent ? "Present" : "Absent",
            };
          }
        }
        return entry;
      })
    );
  };

  const today = new Date().toISOString().split("T")[0];
  const todayData = attendanceData.find((entry) => entry.date === today);
  const isWeekOffToday = todayData?.status === "Week Off";
  const alreadyCheckedIn = todayData?.checkIn !== "---";

  return (
    <div className="border rounded-md shadow-lg p-6 bg-white">
      <div className="wrapper space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-blue-600">
            Time: {currentTime}
          </h1>

          <div className="flex items-center gap-4">
            {!isWeekOffToday && (
              <button
                onClick={handleCheck}
                className={`px-4 py-2 flex items-center gap-2 rounded-md text-sm font-medium text-white transition-all duration-300 ${
                  alreadyCheckedIn
                    ? "bg-green-600 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {alreadyCheckedIn ? (
                  <>
                    <FaCheckCircle className="text-white" />
                    Check Out
                  </>
                ) : (
                  "Check In"
                )}
              </button>
            )}

            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border border-gray-300 text-gray-700 text-sm px-3 py-2 rounded-md outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto">
          <AttendanceTable data={attendanceData} />
        </div>
      </div>
    </div>
  );
};

export default Attendence;
