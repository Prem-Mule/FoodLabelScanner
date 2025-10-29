import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Scan from "./Scan.jsx";
import FoodDetails from "./FoodDetails.jsx";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/details" element={<FoodDetails />} />
    </Routes>
  </Router>
);

export default AppRoutes;
