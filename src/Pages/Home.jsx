import React from "react";

import {
  FaSearch,
  FaBarcode,
  FaChartLine,
  FaUtensils,
  FaMagic,
  FaUserCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import HealthProfileCard from "../Components/HealthProfileCard";
import WeeklyCalorieChart from "../Components/WeeklyCalorieChart";

const Home = () => {
  const actions = [
    { label: "Scan Label", icon: <FaSearch />, path: "/scan-label" },
    { label: "Scan Barcode", icon: <FaBarcode />, path: "/scan-barcode" },
    { label: "Health Dashboard", icon: <FaChartLine />, path: "/dashboard" },
    { label: "Meal Planner", icon: <FaUtensils />, path: "/meal-planner" },
  ];
  const navigate = useNavigate();

  const communityFeed = [
    {
      name: "Alex Johnson",
      message:
        "Just tried the new healthy pasta recipe, it's amazing! #healthyfood",
    },
    {
      name: "Maria Garcia",
      message: "My 10-day sugar-free challenge is complete! Feeling great.",
    },
    {
      name: "Chen Wei",
      message: "Found a great low-sodium snack. Check my recent scans!",
    },
  ];

  return (
    <>
      {/* Header */}

      <div className="bg-gray-50 min-h-screen text-gray-800">
        {/* Header */}
        <header className="bg-[#1E293B] text-white p-6 flex justify-between items-center rounded-lg m-4">
          <div>
            <h1 className="text-2xl font-semibold">Good Morning 👋</h1>
            <p className="text-base text-gray-300">
              Ready to make healthy choices?
            </p>
          </div>
          <HealthProfileCard />
        </header>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow p-4 mx-4 mb-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products, ingredients, or brands..."
              className="w-full focus:outline-none text-gray-700 text-sm"
            />
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 mb-4">
          <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:bg-gray-200 cursor-pointer">
            <FaSearch className="text-gray-600 text-2xl mb-2 mx-auto" />
            <p className="font-medium text-gray-700">Scan Label</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:bg-gray-200 cursor-pointer">
            <FaBarcode className="text-gray-600 text-2xl mb-2 mx-auto" />
            <p className="font-medium text-gray-700">Scan Barcode</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:bg-gray-200 cursor-pointer">
            <FaChartLine className="text-gray-600 text-2xl mb-2 mx-auto" />
            <p className="font-medium text-gray-700">Health Dashboard</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:bg-gray-200 cursor-pointer">
            <FaUtensils className="text-gray-600 text-2xl mb-2 mx-auto" />
            <p className="font-medium text-gray-700">Meal Planner</p>
          </div>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-4 mb-6">
          {actions.map((action, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(action.path);
              }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-100"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3 text-xl">
                {action.icon}
              </div>
              <p className="font-semibold text-gray-700 text-base tracking-wide">
                {action.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Banner */}
        {/* <div className="bg-white rounded-lg shadow p-6 mx-4 mb-4 flex flex-col md:flex-row items-center">
          <div className="bg-gray-200 w-full md:w-1/3 h-40 rounded-lg mb-4 md:mb-0"></div>
          <div className="md:ml-6 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">
              Unlock Health Insights Instantly
            </h3>
            <p className="text-sm mb-4">
              Advanced AI-powered ingredient analysis with instant health
              insights.
            </p>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">
              Smart Scan Food Label
            </button>
          </div>
        </div> */}

        <div className="bg-white rounded-xl shadow-md p-6 mx-4 mb-6 flex flex-col md:flex-row items-center">
          {/* Image Placeholder */}
          <div className="bg-gray-300 w-full md:w-fit h-60 object-contain rounded-3xl flex items-center justify-center text-gray-600 text-sm font-medium">
            <img
              src="public/mustard.jpg"
              alt=""
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>

          {/* Text Content */}
          <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Unlock Health Insights Instantly
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Advanced AI-powered ingredient analysis with instant health
              insights.
            </p>
            <button className="bg-[#1E293B] text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-[#111827] transition">
              <FaMagic className="text-white" />
              Smart Scan Food Label
            </button>
          </div>
        </div>

        {/* Community Feed & Weekly Calorie Intake */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 mb-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-2">Community Feed</h4>
            <ul className="text-sm space-y-2">
              <li>Alex Johnson: Just tried the new healthy pasta recipe...</li>
              <li>Maria Garcia: My 10-day sugar-free challenge is complete!</li>
              <li>
                Chan Wei: Found a new low-sodium snack. Check my recent scans!
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-2">Weekly Calorie Intake</h4>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 mb-6">
          {/* Community Feed */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Community Feed
            </h4>
            <ul className="space-y-4">
              {communityFeed.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaUserCircle className="text-gray-400 text-3xl" />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly Calorie Intake */}
          <WeeklyCalorieChart />
        </div>

        {/* Community Highlights & Recent Scans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 mb-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-2">Community Highlights</h4>
            <p className="text-sm mb-2">
              Product of the Week: Organic Almond Butter
            </p>
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-gray-900 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-2">Recent Scans</h4>
            <ul className="text-sm space-y-2">
              <li>
                Puck-O Original Gluco Biscuits{" "}
                <span className="bg-gray-100 px-2 py-1 rounded">
                  High Sugar
                </span>
              </li>
              <li>Whole Wheat Bread</li>
              <li>
                Instant Noodles - Masala{" "}
                <span className="bg-gray-100 px-2 py-1 rounded">
                  Moderate Sodium
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center p-6 rounded-lg mx-4">
          <p className="text-lg font-semibold">12-Day Streak 🔥</p>
          <p className="text-sm">Nice work! Keep making healthy choices.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
