const AttendanceTable = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300">
      <thead className="bg-blue-100 text-gray-800 font-semibold">
        <tr>
          <th className="border px-4 py-2">Date</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Check In</th>
          <th className="border px-4 py-2">Check Out</th>
          <th className="border px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
            <td className="border px-4 py-2">{row.date}</td>
            <td className="border px-4 py-2">{row.status}</td>
            <td className="border px-4 py-2">{row.checkIn}</td>
            <td className="border px-4 py-2">{row.checkOut}</td>
            <td className="border px-4 py-2">{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AttendanceTable;