// src/components/userpanel/Sidebar.jsx

import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const links = [
    { id: "profile", label: "Your profile" },
    { id: "trips", label: "Trips" },
    { id: "vehicles", label: "Vehicles" },
    { id: "payments", label: "Payments" },
    { id: "settings", label: "Account settings" },
    { id: "support", label: "Support" },
  ];

  return (
    <nav className="w-64 bg-white shadow-md" aria-label="User panel sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => setActiveSection(link.id)}
              className={`w-full text-left px-4 py-2 ${
                activeSection === link.id
                  ? "bg-gray-200 font-bold"
                  : "hover:bg-gray-100"
              }`}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
