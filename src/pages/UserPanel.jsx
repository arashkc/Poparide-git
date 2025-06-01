// src/pages/UserPanel.jsx

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import Sidebar from "../components/userpanel/Sidebar";
import Header from "../components/userpanel/Header";
import ProfileOverview from "../components/userpanel/ProfileOverview";
import TripsSection from "../components/userpanel/TripsSection";
import VehiclesSection from "../components/userpanel/VehiclesSection";
import PaymentMethods from "../components/userpanel/PaymentMethods";
import AccountSettings from "../components/userpanel/AccountSettings";
import SupportSection from "../components/userpanel/SupportSection";

const UserPanel = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    if (!loading && !user) navigate("/loginregister");
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        در حال بارگذاری...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex flex-col h-screen">
      <Header user={user} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50" role="main">
          <section aria-labelledby="profile-overview-heading">
            {activeSection === "profile" && <ProfileOverview user={user} />}
            {activeSection === "trips" && <TripsSection />}
            {activeSection === "vehicles" && <VehiclesSection />}
            {activeSection === "payments" && <PaymentMethods />}
            {activeSection === "settings" && <AccountSettings />}
            {activeSection === "support" && <SupportSection />}
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserPanel;
