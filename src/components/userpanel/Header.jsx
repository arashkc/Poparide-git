// src/components/UserPanel/Header.jsx

import React from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="lg:hidden flex items-center justify-between p-4 border-b bg-white shadow-sm">
      <h1 className="text-xl font-bold text-gray-800">پنل کاربری</h1>
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Header;
