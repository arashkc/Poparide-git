import React from "react";
import { FaUser, FaCog, FaCreditCard, FaSignOutAlt } from "react-icons/fa";

const UserPanelHeader = ({ user }) => {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 shadow bg-white"
      dir="rtl"
    >
      <div className="flex items-center gap-10">
        <div className="text-orange-600 font-bold text-2xl">همسفر</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-orange-600">
            داشبورد
          </a>
          <a href="#" className="hover:text-orange-600">
            سفرها
          </a>
          <a href="#" className="hover:text-orange-600">
            راهنما
          </a>
        </nav>
      </div>
      <div className="relative group">
        <img
          src={user?.photo || "/avatar.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-md p-2 hidden group-hover:block z-50 text-right">
          <ul className="text-sm text-gray-700">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <FaUser /> پروفایل
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <FaCog /> تنظیمات حساب
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <FaCreditCard /> پرداخت‌ها
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <FaSignOutAlt /> خروج
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default UserPanelHeader;
