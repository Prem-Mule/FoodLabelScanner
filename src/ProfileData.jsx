// src/pages/ProfileData.jsx
const ProfileData = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-8 max-w-[90%] mx-auto  my-[3vw] rounded-3xl">
      <div className="flex ">
        {/* Sidebar */}
        <div className=" bg-white rounded-lg shadow p-6 space-y-6 w-[35%]">
          {/* Profile Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-500 text-sm">jane.doe@example.com</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-4 flex flex-col">
            {/* Profile & Settings */}
            <div className="flex items-center space-x-3 border-2 rounded px-4 py-3 hover:bg-green-50 transition">
              <a
                href="#"
                className="flex items-center gap-3 w-fulledium text-green-600"
              >
                <img
                  src="public/profile.png"
                  alt="Logout Icon"
                  className="h-6 w-6"
                />
                Profile & Settings
              </a>
            </div>

            {/* Virtual Assistant */}
            <div className="flex items-center space-x-3 border-2 rounded px-4 py-3 hover:bg-gray-50 transition">
              <a href="" className="flex items-center gap-3 w-fulledium">
                <img
                  src="public/profile.png"
                  alt="Logout Icon"
                  className="h-6 w-6"
                />
                Virtual Assistant
              </a>
            </div>

            {/* Logout */}
            <div className="flex items-center space-x-3 border-2 rounded px-4 py-3 hover:bg-red-50 transition">
              <a href="" className="flex items-center gap-3 w-fulledium">
                <img
                  src="public/profile.png"
                  alt="Logout Icon"
                  className="h-6 w-6"
                />
                Log Out
              </a>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-[5vw] space-y-8">
          {/* Dietary Preferences */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dietary Preferences</h3>
            <div className=" flex gap-10 flex-wrap">
              {[
                "Vegetarian",
                "Vegan",
                "Gluten-Free",
                "Dairy-Free",
                "Nut-Free",
              ].map((pref, i) => (
                <label
                  key={i}
                  className="flex items-center space-x-2 bg-white rounded-lg shadow p-3"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded"
                  />
                  <span>{pref}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Notification Settings
            </h3>
            <div className="flex items-center justify-between bg-white rounded-lg shadow p-4">
              <div>
                <span className="font-medium">Weekly Summary</span>
                <p className="text-gray-500 text-sm">
                  Get a report of your weekly scans.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
