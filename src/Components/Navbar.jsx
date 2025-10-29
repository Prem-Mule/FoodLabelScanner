// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-green-500 rounded"></div>
        <span className="text-xl font-bold">FoodScanAI</span>
      </div>
      <div className="flex items-center space-x-6 text-gray-700">
        <a>Dashboard</a>
        <a>last-scanLast Scan</a>
        <a>profileProfile</a>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </nav>
  );
};

export default Navbar;
``;
