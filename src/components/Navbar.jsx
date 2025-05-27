// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold text-blue-600 tracking-wide hover:text-blue-700 transition duration-200"
        >
          همسفر
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium text-base">
          <li>
            <Link
              to="/trips"
              className="hover:text-blue-600 transition duration-200"
            >
              سفرها
            </Link>
          </li>
          <li>
            <Link
              to="/questions"
              className="hover:text-blue-600 transition duration-200"
            >
              توضیحات
            </Link>
          </li>
          <li>
            <Link
              to="/loginregister"
              className="hover:text-blue-600 transition duration-200"
            >
              ثبت‌نام / ورود
            </Link>
          </li>
          <li>
            <Link to="/add-trip">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 px-5 rounded-full shadow-md transition font-bold text-sm">
                اضافه کردن سفر
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gradient-to-b from-blue-50 to-blue-100 shadow-md rounded-b-lg px-6 pt-4 pb-6 space-y-4 text-gray-700 font-medium text-base animate-slide-down">
          <li>
            <Link
              to="/trips"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-200"
            >
              سفرها
            </Link>
          </li>
          <li>
            <Link
              to="/questions"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-200"
            >
              توضیحات
            </Link>
          </li>
          <li>
            <Link
              to="/loginregister"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition duration-200"
            >
              ثبت‌نام / ورود
            </Link>
          </li>
          <li>
            <Link to="/add-trip" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 px-4 rounded-full shadow-md transition font-bold text-sm">
                اضافه کردن سفر
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
