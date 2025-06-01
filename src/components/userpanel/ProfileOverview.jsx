// src/components/userpanel/ProfileOverview.jsx
import React from "react";

const ProfileOverview = ({ user }) => {
  return (
    <section className="text-center">
      <img
        src={user?.avatar || "https://via.placeholder.com/100"}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">
        Hi {user?.name || "Guest"}, Welcome to Poparide!
      </h2>
      <p className="text-gray-600 mt-2">No km shared, yet</p>
      <p className="text-gray-600">No activity, yet</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
        Get started
      </button>
    </section>
  );
};

export default ProfileOverview;
