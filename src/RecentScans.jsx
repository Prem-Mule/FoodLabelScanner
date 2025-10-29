// src/components/RecentScans.jsx
const scans = [
  {
    name: "Greek Yogurt",
    date: "Oct 28, 2025",
    img: "public/yogurt.png",
  },
  {
    name: "Organic Pasta",
    date: "Oct 27, 2025",
    img: "organicPasta.png",
  },
  { name: "Almond Milk", date: "Oct 27, 2025", img: "AlmondMilk.png" },
];

const RecentScans = () => {
  return (
    <section className="mt-8 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Your Recent Scans</h3>
        <a>all-scansView All</a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-4">
        {scans.map((scan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={scan.img}
              alt={scan.name}
              className="w-full h-[16vw] object-cover rounded"
            />
            <h4 className="mt-2 font-semibold">{scan.name}</h4>
            <p className="text-gray-500 text-sm">Scanned: {scan.date}</p>
          </div>
        ))}

        {/* Scan New Item Card */}
        <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-4 hover:bg-gray-50 cursor-pointer">
          <span className="text-3xl text-gray-400">+</span>
          <p className="mt-2 font-semibold text-gray-700">Scan New Item</p>
          <p className="text-gray-500 text-sm">Start a new scan</p>
        </div>
      </div>
    </section>
  );
};

export default RecentScans;
