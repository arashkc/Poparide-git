// src/components/userpanel/Header.jsx

import React from "react";

const Header = ({ user }) => {
  return (
    <header
      className="flex items-center justify-between px-4 py-3 bg-white shadow-md"
      role="banner"
    >
      <h1 className="text-xl font-bold">Poparide</h1>
      <div className="flex items-center gap-4">
        <button
          className="hover:bg-gray-100 p-2 rounded"
          aria-label="Post a ride"
        >
          + Post
        </button>
        <button className="hover:bg-gray-100 p-2 rounded" aria-label="Search">
          🔍
        </button>
        <img
          src={user.avatar}
          alt={`Profile of ${user.name}`}
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
