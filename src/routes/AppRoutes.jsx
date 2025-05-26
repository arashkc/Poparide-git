import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import Features from "../components/Features";
import TestimonialSection from "../components/Testimonialsection";

// Pages
import LoginRegister from "../pages/LoginRegister";
import Trips from "../pages/Trips";
import Questions from "../pages/Questions";
import AddTrip from "../pages/AddTrip";
import UserPanel from "../pages/UserPanel"; // ← Add this import

const AppRoutes = () => {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features />
              <TestimonialSection />
            </>
          }
        />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/user-panel" element={<UserPanel />} />{" "}
        {/* ← Add this route */}
      </Routes>
    </>
  );
};

export default AppRoutes;
