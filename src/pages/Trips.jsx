// src/components/Trips.jsx
import React, { useContext } from "react";
import { RideContext } from "../context/RideContext";
import RideCard from "../components/Ridecard";

const Trips = () => {
  const { rides } = useContext(RideContext);

  return (
    <div>
      {rides.map((ride) => (
        <RideCard key={ride.id} ride={ride} />
      ))}
    </div>
  );
};

export default Trips;
