// src/components/userpanel/TripsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const trips = [
  { id: 1, destination: "تهران", date: "1403/03/07", status: "تایید شده" },
  { id: 2, destination: "شیراز", date: "1403/03/15", status: "در انتظار" },
];

const statusColors = {
  "تایید شده": "bg-green-100 text-green-800",
  "در انتظار": "bg-yellow-100 text-yellow-800",
  "لغو شده": "bg-red-100 text-red-800",
};

const TripsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-gray-200 pb-4 text-gray-800">
        سفرهای من
      </h2>

      {trips.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-16">
          هیچ سفری ثبت نشده است.
        </p>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trips.map(({ id, destination, date, status }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-tr from-white to-blue-50 shadow-lg hover:shadow-2xl cursor-pointer transform transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {destination}
                </h3>
                <p className="text-gray-600 text-sm">تاریخ: {date}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${
                    statusColors[status] || "bg-gray-200 text-gray-800"
                  }`}
                >
                  {status}
                </span>

                <div className="flex gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`ویرایش سفر به ${destination}`);
                    }}
                  >
                    ویرایش
                  </button>

                  <button
                    className="text-red-600 hover:text-red-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`حذف سفر به ${destination}`);
                    }}
                  >
                    حذف
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
          onClick={() => alert("اضافه کردن سفر جدید در دست توسعه است")}
        >
          اضافه کردن سفر جدید
        </motion.button>
      </div>
    </motion.section>
  );
};

export default TripsSection;
