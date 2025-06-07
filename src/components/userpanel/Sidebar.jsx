// src/components/userpanel/Sidebar.jsx
import React from "react";
import {
  HiOutlineUser,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineCreditCard,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineLogout,
} from "react-icons/hi";

const navItems = [
  { id: "profile", label: "پروفایل", icon: <HiOutlineUser /> },
  { id: "trips", label: "سفرها", icon: <HiOutlineClipboardList /> },
  { id: "vehicles", label: "خودروها", icon: <HiOutlineTruck /> },
  { id: "payments", label: "پرداخت‌ها", icon: <HiOutlineCreditCard /> },
  { id: "settings", label: "تنظیمات", icon: <HiOutlineCog /> },
  { id: "support", label: "پشتیبانی", icon: <HiOutlineQuestionMarkCircle /> },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <nav className="flex flex-col h-full py-6">
        <ul className="flex-1 space-y-2 px-4">
          {navItems.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                onClick={() => setActiveSection(id)}
                className={`flex items-center w-full text-right px-4 py-3 rounded-lg transition hover:bg-gray-100 text-gray-700 ${
                  activeSection === id
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : ""
                }`}
              >
                <span className="ml-3 text-xl">{icon}</span>
                <span className="text-base">{label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-100 mt-auto pt-4 px-4">
          <button
            onClick={() => {
              // TODO: implement logout
            }}
            className="flex items-center w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
          >
            <HiOutlineLogout className="ml-3 text-xl" />
            <span>خروج</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
