import React, { createContext, useState } from "react";

// 1. Create the Context
export const RideContext = createContext();

// 2. Mock rides as initial state
const initialRides = [
  {
    id: 1,
    origin: "تهران",
    destination: "رشت",
    departureTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    duration: "4 ساعت",
    availableSeats: 2,
    totalSeats: 4,
    cost: 150000,
    driver: {
      name: "علی رضایی",
      avatar: "driver1-avatar.png",
    },
    car: "پژو",
  },
  {
    id: 2,
    origin: "اصفهان",
    destination: "شیراز",
    departureTime: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
    duration: "5 ساعت",
    availableSeats: 3,
    totalSeats: 3,
    cost: 300000,
    driver: {
      name: "مهدی موسوی",
      avatar: "driver2-avatar.png",
    },
    car: "پراید",
  },
];

// 3. Provider component that wraps your app
export const RideProvider = ({ children }) => {
  const [rides, setRides] = useState(initialRides);

  return (
    <RideContext.Provider value={{ rides, setRides }}>
      {children}
    </RideContext.Provider>
  );
};
