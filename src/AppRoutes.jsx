import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealPlanner from "./Pages/MealPlanner.jsx";
import Home from "./Pages/Home.jsx";
import HealthDashboard from "./Pages/HealthDashboard.jsx";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<HealthDashboard />} />
      <Route path="/meal-planner" element={<MealPlanner />} />
    </Routes>
  </Router>
);

export default AppRoutes;
