// src/components/UserPanel/Sidebar.jsx

import React from "react";
import {
  User,
  Car,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { label: "پروفایل", icon: <User size={20} />, id: "profile" },
    { label: "سفرها", icon: <Car size={20} />, id: "trips" },
    { label: "وسایل نقلیه", icon: <Car size={20} />, id: "vehicles" },
    { label: "پرداخت‌ها", icon: <CreditCard size={20} />, id: "payments" },
    { label: "تنظیمات", icon: <Settings size={20} />, id: "settings" },
    { label: "پشتیبانی", icon: <HelpCircle size={20} />, id: "support" },
  ];

  return (
    <aside className="w-64 bg-white border-r h-full hidden lg:flex flex-col p-6">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center gap-3 w-full text-right text-lg p-3 rounded-lg transition ${
              activeSection === item.id
                ? "bg-indigo-100 text-indigo-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t">
        <button
          onClick={() => alert("خروج از حساب در دست توسعه است")}
          className="flex items-center gap-3 w-full text-right text-lg p-3 rounded-lg text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={20} />
          <span>خروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
