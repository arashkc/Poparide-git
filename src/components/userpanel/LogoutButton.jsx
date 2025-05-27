// src/components/userpanel/LogoutButton.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    // Simulate logout process (replace with actual logout logic)
    setTimeout(() => {
      setLoading(false);
      // For example, clear user context, tokens, and redirect
      window.location.href = "/loginregister";
    }, 1200);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full py-3 rounded-lg text-white font-semibold shadow-md transition ${
        loading
          ? "bg-red-300 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-400"
      }`}
      onClick={handleLogout}
      disabled={loading}
      aria-label="خروج از حساب کاربری"
    >
      {loading ? "در حال خروج..." : "خروج از حساب کاربری"}
    </motion.button>
  );
};

export default LogoutButton;
