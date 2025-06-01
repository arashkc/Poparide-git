import React from "react";

const ProfileHero = ({ user }) => {
  return (
    <div className="text-center py-10">
      <img
        src={user.avatar || "https://via.placeholder.com/100"}
        alt="User"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">Hi {user.name},</h2>
      <p className="text-gray-600 mb-4">Welcome to Poparide!</p>
      <button className="bg-black text-white px-6 py-2 rounded-full">
        Get started
      </button>
    </div>
  );
};

export default ProfileHero;
