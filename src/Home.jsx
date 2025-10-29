// src/pages/Home.jsx

import Navbar from "./Components/Navbar";
import FoodDetails from "./FoodDetails";
import Hero from "./Hero";
import ProfileData from "./ProfileData";
import RecentScans from "./RecentScans";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-[90%] mx-auto">
        <Hero />    
        <RecentScans />
      </div>
      <FoodDetails />
      <ProfileData />
    </div>
  );
};

export default Home;
