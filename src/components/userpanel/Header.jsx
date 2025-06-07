// src/components/userpanel/Header.jsx
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ user }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left: Logo or Toggle Button */}
      <div className="flex items-center gap-4">
        <HiOutlineMenu className="text-2xl text-gray-500 cursor-pointer md:hidden" />
        <span className="text-xl font-semibold text-indigo-600">
          پنل کاربری
        </span>
      </div>

      {/* Right: User Info */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700 hidden sm:block">
          {user?.name || "کاربر"}
        </span>
        <FaUserCircle className="text-3xl text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
