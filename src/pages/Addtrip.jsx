// src/components/AddTrip.jsx
import React, { useState, useContext } from "react";
import { RideContext } from "../context/RideContext";

const AddTrip = () => {
  const { rides, setRides } = useContext(RideContext);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureTime: "",
    duration: "",
    availableSeats: 0,
    totalSeats: 0,
    cost: 0,
    driverName: "",
    driverAvatar: "",
    car: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRide = {
      id: Date.now(),
      ...formData,
      driver: {
        name: formData.driverName,
        avatar: formData.driverAvatar,
      },
    };
    setRides([...rides, newRide]);
    // TODO: Replace with API call to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form Fields for each formData property */}
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddTrip;
