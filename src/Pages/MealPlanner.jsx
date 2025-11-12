import { useState } from "react";
import { FaClock, FaPlus, FaPause, FaInfoCircle } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MealPlanner = () => {
  const [activeTab, setActiveTab] = useState("Suggestions");
  const [mealType, setMealType] = useState("Breakfast");

  // Sample Data
  const suggestionsData = {
    Breakfast: [
      {
        name: "Quinoa Upma with Vegetables",
        time: "15 min",
        calories: "280 cal",
        tags: ["Gluten-Free", "High Protein", "Low Sodium"],
        nutrition: { protein: "12g", carbs: "35g", fat: "8g", fiber: "6g" },
        rating: 4.5,
      },
      {
        name: "Oats Dosa with Coconut Chutney",
        time: "20 min",
        calories: "320 cal",
        tags: ["High Fiber", "Probiotic", "Traditional"],
        nutrition: { protein: "10g", carbs: "40g", fat: "9g", fiber: "7g" },
        rating: 4.2,
      },
    ],
    Lunch: [
      {
        name: "Brown Rice & Dal",
        time: "25 min",
        calories: "350 cal",
        tags: ["High Fiber", "Low Fat"],
        nutrition: { protein: "15g", carbs: "50g", fat: "6g", fiber: "8g" },
        rating: 4.6,
      },
    ],
    Dinner: [
      {
        name: "Veg Soup",
        time: "15 min",
        calories: "150 cal",
        tags: ["Low Calorie", "Light Meal"],
        nutrition: { protein: "5g", carbs: "20g", fat: "3g", fiber: "4g" },
        rating: 4.3,
      },
    ],
  };

  const weeklyPlanData = [
    {
      day: "Mon",
      date: 15,
      breakfast: "Quinoa Upma",
      lunch: "Brown Rice Dal",
      dinner: "Veg Soup",
    },
    {
      day: "Tue",
      date: 16,
      breakfast: "Oats Dosa",
      lunch: "Millet Khichdi",
      dinner: "Grilled Paneer",
    },
    {
      day: "Wed",
      date: 17,
      breakfast: "Moong Cheela",
      lunch: "Brown Rice Dal",
      dinner: "Veg Soup",
    },
  ];

  const goalsData = {
    calories: { value: 1650, goal: 1800, percent: 92 },
    protein: { value: 68, goal: 80, percent: 85 },
    carbs: { value: 180, goal: 200, percent: 90 },
    fat: { value: 45, goal: 60, percent: 75 },
    fiber: { value: 22, goal: 25, percent: 88 },
    suggestion:
      "Protein Boost Needed: Add 12g more protein to reach your daily goal. Try adding paneer or sprouts to your next meal.",
  };

  const chartData = {
    labels: ["Consumed", "Remaining"],
    datasets: [
      {
        data: [1650, 150],
        backgroundColor: ["#10B981", "#E5E7EB"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: { legend: { display: false } },
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="bg-green-500 text-white rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold">AI Meal Planner</h1>
        <p className="text-sm mb-4">Personalized nutrition for your health</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Calories", value: "1650 / 1800" },
            { label: "Protein", value: "68g / 80g" },
            { label: "Fiber", value: "22g / 25g" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-green-700 rounded-lg p-4 text-center shadow-sm"
            >
              <p className="text-lg font-bold">{item.value}</p>
              <p className="text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["Suggestions", "Weekly Plan", "Goals"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === tab
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Content */}
        <div className="lg:w-2/3 space-y-6">
          {/* Suggestions */}
          {activeTab === "Suggestions" && (
            <>
              <div className="flex gap-4 mb-6">
                {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                  <button
                    key={meal}
                    onClick={() => setMealType(meal)}
                    className={`px-4 py-2 rounded-lg transition ${
                      mealType === meal
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {meal}
                  </button>
                ))}
              </div>
              <h2 className="text-lg font-semibold mb-4">
                AI Recommendations for {mealType}
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {suggestionsData[mealType].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-4 w-72 hover:shadow-lg transition"
                  >
                    <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <FaClock className="mr-1" /> {item.time} • {item.calories}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-4 text-center text-xs mt-3">
                      <div>
                        {item.nutrition.protein}
                        <br />
                        Protein
                      </div>
                      <div>
                        {item.nutrition.carbs}
                        <br />
                        Carbs
                      </div>
                      <div>
                        {item.nutrition.fat}
                        <br />
                        Fat
                      </div>
                      <div>
                        {item.nutrition.fiber}
                        <br />
                        Fiber
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <button className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 hover:bg-green-600">
                        <FaPlus /> Add to Plan
                      </button>
                      <div className="flex gap-2 text-gray-500">
                        <FaPause /> <FaInfoCircle />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Weekly Plan */}
          {activeTab === "Weekly Plan" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">
                This Week's Meal Plan
              </h2>
              <div className="space-y-4">
                {weeklyPlanData.map((day, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
                  >
                    <div className="flex justify-between mb-2">
                      <p className="font-semibold">
                        {day.day} {day.date}
                      </p>
                      <button className="text-green-500 font-semibold hover:underline">
                        Customize
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-orange-500">
                        Breakfast
                        <br />
                        {day.breakfast}
                      </div>
                      <div className="text-green-500">
                        Lunch
                        <br />
                        {day.lunch}
                      </div>
                      <div className="text-purple-500">
                        Dinner
                        <br />
                        {day.dinner}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Goals */}
          {activeTab === "Goals" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Daily Nutritional Goals
              </h2>
              <div className="space-y-4">
                {Object.keys(goalsData)
                  .filter((key) => key !== "suggestion")
                  .map((key) => (
                    <div key={key}>
                      <p className="text-sm font-semibold">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {goalsData[key].value} / {goalsData[key].goal}
                      </p>
                      <div className="bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-500 h-3 rounded-full"
                          style={{ width: `${goalsData[key].percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 mt-6">
                <h4 className="font-semibold mb-2">Smart Suggestions</h4>
                <p className="text-blue-600 text-sm">{goalsData.suggestion}</p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 sticky top-6 self-start space-y-6 h-fit">
          <div className="bg-white rounded-xl shadow-md p-4">
            <h4 className="font-semibold mb-4">Today's Summary</h4>
            <div className="w-40 mx-auto">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
            <p className="text-center font-semibold text-gray-700 mt-2">
              1650 / 1800 Kcal
            </p>
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>Protein: 68 / 80g</p>
              <p>Carbs: 180 / 220g</p>
              <p>Fats: 50 / 60g</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <h4 className="font-semibold mb-4">Meal Insights</h4>
            <ul className="space-y-3 text-sm">
              <li>
                💧 Stay Hydrated: Drink at least 8 glasses of water today.
              </li>
              <li>
                🥗 Increase Fiber: Try adding more leafy greens to your lunch.
              </li>
              <li>🍊 Energy Boost: A fruit snack in the afternoon can help.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MealPlanner;
