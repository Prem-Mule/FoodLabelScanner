import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaLeaf,
  FaFireAlt,
} from "react-icons/fa";

const HealthDashboard = () => {
  const nutritionGoals = [
    { label: "Protein", value: 64, goal: 80, color: "bg-green-500" },
    { label: "Fiber", value: 22, goal: 23, color: "bg-green-500" },
    { label: "Sugar", value: 15, goal: 10, color: "bg-rose-500" },
    { label: "Sodium", value: 1.6, goal: 2.3, color: "bg-green-500" },
  ];

  const insights = [
    {
      type: "alert",
      text: "Sugar Intake Alert: You've exceeded daily sugar goals. Try swapping sweets for fruits.",
    },
    {
      type: "success",
      text: "Allergen-Free Streak: 12-day streak with no allergen intake. Keep it up!",
    },
    {
      type: "info",
      text: "Protein Goal Achievement: You met your protein goal 3 days in a row. Great consistency!",
    },
  ];

  const achievements = [
    {
      label: "Healthy Scanner",
      icon: <FaLeaf />,
      color: "bg-gradient-to-r from-yellow-100 to-yellow-200",
    },
    {
      label: "Allergen Avoider",
      icon: <FaCheckCircle />,
      color: "bg-gradient-to-r from-blue-100 to-blue-200",
    },
    {
      label: "Nutrition Ninja",
      icon: <FaFireAlt />,
      color: "bg-gradient-to-r from-green-100 to-green-200",
    },
    {
      label: "Smart Shopper",
      icon: <FaCheckCircle />,
      color: "bg-gradient-to-r from-gray-100 to-gray-200",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded-2xl p-6 mb-6 flex justify-between items-center shadow-lg">
        <div>
          <h1 className="text-3xl font-bold">Health Dashboard</h1>
          <p className="text-sm opacity-90">
            Your personalized health insights
          </p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center text-2xl font-bold bg-white text-green-600">
            72%
          </div>
          <p className="text-sm mt-2">
            Overall Health Score
            <br />
            <span className="font-semibold">7.2 / 10</span>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["Day", "Week", "Month", "Year"].map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              tab === "Week"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Scans Completed", value: 18 },
          { label: "Healthy Choices", value: 14 },
          { label: "Day Streak", value: 12 },
          { label: "Calories Saved", value: 420 },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-xl transition"
          >
            <p className="text-3xl font-bold text-green-600">{item.value}</p>
            <p className="text-gray-500 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Nutrition Goals */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-2">
          <h4 className="font-semibold mb-4 text-lg">Nutrition Goals</h4>
          <div className="space-y-5">
            {nutritionGoals.map((goal, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{goal.label}</span>
                  <span>
                    {goal.value} / {goal.goal}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${goal.color} h-3 rounded-full transition-all`}
                    style={{ width: `${(goal.value / goal.goal) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Allergen Safety */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h4 className="font-semibold mb-4 text-lg">Allergen Safety</h4>
          <div className="text-5xl font-bold text-green-600 mb-2">94%</div>
          <p className="text-gray-500 mb-4">Safety Index</p>
          <div className="grid grid-cols-3 text-sm text-gray-600 gap-4">
            <div>
              <p className="font-bold text-lg">12</p>
              <p>Day Streak</p>
            </div>
            <div>
              <p className="font-bold text-lg">7</p>
              <p>Products Avoided</p>
            </div>
            <div>
              <p className="font-bold text-lg">16</p>
              <p>Safe Choices</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
        <h4 className="font-semibold mb-4 text-lg">AI Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((insight, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl shadow-sm ${
                insight.type === "alert"
                  ? "bg-rose-50 text-rose-600"
                  : insight.type === "success"
                  ? "bg-green-50 text-green-600"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <p className="text-sm">{insight.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {achievements.map((achieve, i) => (
          <div
            key={i}
            className={`${achieve.color} rounded-2xl p-4 text-center shadow hover:shadow-lg transition`}
          >
            <div className="text-2xl mb-2">{achieve.icon}</div>
            <p className="font-semibold">{achieve.label}</p>
            <p className="text-xs text-gray-500">Unlocked</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthDashboard;
