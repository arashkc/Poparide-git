import React from "react";

const TopNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b">
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-bold text-orange-500">POPARRIDE</h1>
        <ul className="flex space-x-6 text-gray-700">
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Trips</li>
          <li className="hover:underline cursor-pointer">Help</li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
