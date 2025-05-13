// MainButton.jsx
const MainButton = ({ title, time, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-5 m-5 flex flex-col gap-2 justify-center border rounded-lg hover:bg-gray-100 transition"
    >
      <span className="text-lg font-semibold">{title}</span>
      <span className="text-sm text-gray-600">{time}</span>
    </button>
  );
};

export default MainButton;
