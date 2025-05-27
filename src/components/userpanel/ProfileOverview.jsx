import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const ProfileOverview = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // TODO: Save logic here
    setEditing(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-lg border border-gray-200"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-800 border-b pb-4">
        پروفایل شما
      </h2>

      <div className="flex items-center gap-12 rtl:gap-x-reverse">
        {/* Profile Picture */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => fileInputRef.current.click()}
          title="برای تغییر عکس کلیک کنید"
          className="relative cursor-pointer rounded-full overflow-hidden w-28 h-28 shadow-md ring-2 ring-gray-300 hover:ring-indigo-500 transition flex items-center justify-center bg-gray-200"
        >
          {photo ? (
            <img
              src={photo}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition-opacity rounded-full">
            تغییر عکس
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </motion.div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          {!editing ? (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-2xl font-bold text-gray-900 truncate">
                {name || "نام وارد نشده"}
              </p>
              <p className="text-gray-600 text-lg mt-1">{email}</p>
              <button
                onClick={() => setEditing(true)}
                className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              >
                ویرایش پروفایل
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="space-y-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-semibold"
                >
                  نام کاربری
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-semibold"
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                  required
                />
              </div>
              <div className="flex gap-6 rtl:gap-x-reverse">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow transition text-lg"
                >
                  ذخیره تغییرات
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-xl shadow transition text-lg"
                >
                  انصراف
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>

      {/* Profile completeness */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="font-semibold text-gray-700 mb-3 text-lg">
          وضعیت پروفایل
        </p>
        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-6 bg-gradient-to-r from-indigo-500 to-blue-500"
            style={{ width: `${name && email ? 100 : 50}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${name && email ? 100 : 50}%` }}
            transition={{ duration: 0.7 }}
          ></motion.div>
        </div>
        <p className="mt-3 text-gray-500 text-base">
          {name && email
            ? "پروفایل شما کامل است، عالی کار کردید!"
            : "لطفاً اطلاعات پروفایل را کامل کنید تا بهترین تجربه را داشته باشید."}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ProfileOverview;
