import { FaBarcode, FaLeaf, FaFireAlt, FaChartLine } from "react-icons/fa";

const HealthProfileCard = () => {
  return (
    <div className="bg-white text-gray-900 rounded-xl p-5 shadow-lg w-70 hover:shadow-xl transition-shadow duration-300">
      {/* Header Button */}
      <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-4 w-full shadow-md hover:opacity-90 transition">
        Health Profile
      </button>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col items-center">
          <FaBarcode className="text-indigo-500 text-lg mb-1" />
          <p className="font-bold text-xl text-gray-900">3</p>
          <p className="text-xs text-gray-500">Scans</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLeaf className="text-green-500 text-lg mb-1" />
          <p className="font-bold text-xl text-gray-900">2</p>
          <p className="text-xs text-gray-500">Healthy</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFireAlt className="text-red-500 text-lg mb-1" />
          <p className="font-bold text-xl text-gray-900">150</p>
          <p className="text-xs text-gray-500">Cal Saved</p>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine className="text-purple-500 text-lg mb-1" />
          <p className="font-bold text-xl text-gray-900">12</p>
          <p className="text-xs text-gray-500">Streak</p>
        </div>
      </div>
    </div>
  );
};

export default HealthProfileCard;
