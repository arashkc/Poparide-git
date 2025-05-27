// src/pages/UserPanel.jsx
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import ProfileOverview from "../components/userpanel/ProfileOverview";
import TripsSection from "../components/userpanel/TripsSection";
import VehicleSection from "../components/userpanel/VehicleSection";
import AccountSettings from "../components/userpanel/AccountSettings";
import SupportSection from "../components/userpanel/SupportSection";
import LogoutButton from "../components/userpanel/LogoutButton";

const sections = [
  { key: "profile", label: "پروفایل" },
  { key: "trips", label: "سفرها" },
  { key: "vehicle", label: "خودرو" },
  { key: "settings", label: "تنظیمات حساب" },
  { key: "support", label: "پشتیبانی" },
];

const UserPanel = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    if (!loading && !user) navigate("/loginregister");
  }, [user, loading, navigate]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        در حال بارگذاری...
      </div>
    );
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-200 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-white text-3xl font-extrabold uppercase shadow-lg">
            {user.name ? user.name[0] : "U"}
          </div>
          <h3 className="mt-4 text-xl font-bold">{user.name || user.email}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {sections.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`block w-full text-right px-4 py-3 rounded-lg font-medium transition 
                ${
                  activeSection === key
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow"
                    : "hover:bg-blue-100"
                }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <LogoutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 overflow-auto">
        {activeSection === "profile" && <ProfileOverview user={user} />}
        {activeSection === "trips" && <TripsSection />}
        {activeSection === "vehicle" && <VehicleSection />}
        {activeSection === "settings" && <AccountSettings />}
        {activeSection === "support" && <SupportSection />}
      </main>
    </div>
  );
};

export default UserPanel;
