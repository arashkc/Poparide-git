// src/components/userpanel/TripsSection.jsx
import React from "react";

const dummyTrips = [
  {
    id: 1,
    role: "driver",
    from: "تهران",
    to: "اصفهان",
    date: "1403/03/20",
    price: "250,000 تومان",
    status: "تایید شده",
  },
  {
    id: 2,
    role: "passenger",
    from: "رشت",
    to: "تهران",
    date: "1403/03/15",
    price: "180,000 تومان",
    status: "در انتظار تایید",
  },
];

const TripsSection = () => {
  return (
    <section className="bg-white shadow-sm border rounded-2xl p-6 max-w-5xl mx-auto animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
        سفرهای من
      </h2>

      {dummyTrips.length === 0 ? (
        <p className="text-gray-500 text-sm">شما هنوز سفری ندارید.</p>
      ) : (
        <ul className="space-y-4">
          {dummyTrips.map((trip) => (
            <li
              key={trip.id}
              className="border rounded-xl p-4 flex items-center justify-between hover:shadow-md transition"
            >
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  {trip.role === "driver" ? "راننده" : "مسافر"}
                </p>
                <p className="text-lg font-medium text-gray-800">
                  {trip.from} → {trip.to}
                </p>
                <p className="text-sm text-gray-500 mt-1">{trip.date}</p>
              </div>
              <div className="text-right">
                <p className="text-indigo-600 font-semibold">{trip.price}</p>
                <p className="text-xs text-gray-500 mt-1">{trip.status}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TripsSection;
