// src/components/userpanel/VehicleSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const vehicles = [
  { id: 1, model: "پراید ۱۳۱", plate: "۱۲۳الف۴۵", status: "تایید شده" },
  { id: 2, model: "پژو ۲۰۶", plate: "۹۸۷ب۶۵۴", status: "در انتظار" },
];

const VehicleSection = () => {
  const [vehicleList, setVehicleList] = useState(vehicles);

  const handleAddVehicle = () => {
    alert("افزودن خودرو جدید در دست توسعه است.");
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <motion.section
      className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-8 text-gray-800"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        خودروهای من
      </motion.h2>

      {vehicleList.length === 0 ? (
        <p className="text-gray-600">هنوز خودرویی ثبت نکرده‌اید.</p>
      ) : (
        <ul className="space-y-4">
          {vehicleList.map((vehicle, i) => (
            <motion.li
              key={vehicle.id}
              className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition-colors rounded-xl p-4 shadow-sm border"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {vehicle.model}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  پلاک: {vehicle.plate}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium ${
                  vehicle.status === "تایید شده"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {vehicle.status}
              </span>
            </motion.li>
          ))}
        </ul>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 w-full md:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:from-blue-600 hover:to-indigo-700 transition font-semibold"
        onClick={handleAddVehicle}
      >
        افزودن خودرو جدید
      </motion.button>
    </motion.section>
  );
};

export default VehicleSection;
