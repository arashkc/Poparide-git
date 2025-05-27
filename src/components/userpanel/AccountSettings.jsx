// src/components/userpanel/AccountSettings.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const AccountSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("کلمه عبور جدید با تکرار آن مطابقت ندارد.");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("کلمه عبور با موفقیت تغییر یافت!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1500);
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
    >
      <motion.h2
        variants={variants}
        className="text-3xl font-bold mb-8 text-indigo-700"
      >
        تنظیمات حساب
      </motion.h2>

      <motion.form
        variants={variants}
        custom={1}
        onSubmit={handlePasswordChange}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="currentPassword"
            className="block mb-2 font-semibold text-gray-700"
          >
            کلمه عبور فعلی
          </label>
          <input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="کلمه عبور فعلی خود را وارد کنید"
            required
          />
        </div>

        <div>
          <label
            htmlFor="newPassword"
            className="block mb-2 font-semibold text-gray-700"
          >
            کلمه عبور جدید
          </label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="کلمه عبور جدید را وارد کنید"
            required
            minLength={6}
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 font-semibold text-gray-700"
          >
            تکرار کلمه عبور جدید
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="کلمه عبور جدید را تکرار کنید"
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white shadow transition ${
            loading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700"
          }`}
        >
          {loading ? "در حال ذخیره..." : "تغییر کلمه عبور"}
        </button>
      </motion.form>
    </motion.section>
  );
};

export default AccountSettings;
