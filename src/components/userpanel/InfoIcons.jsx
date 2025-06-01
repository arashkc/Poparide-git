import React from "react";
import { FaCar, FaUser } from "react-icons/fa";

const InfoIcons = () => {
  return (
    <div className="flex justify-center gap-8 py-4">
      <div className="flex items-center gap-2 text-gray-700">
        <FaCar /> <span>No km shared, yet</span>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <FaUser /> <span>No activity, yet</span>
      </div>
    </div>
  );
};

export default InfoIcons;
