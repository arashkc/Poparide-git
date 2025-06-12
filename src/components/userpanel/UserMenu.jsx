import React, { useState, useRef, useEffect } from "react";

const UserMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="focus:outline-none"
      >
        <img
          src={user?.photo || "/avatar.png"}
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
      </button>

      {open && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50 text-right"
          dir="rtl"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              پروفایل
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              تنظیمات
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">خروج</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
