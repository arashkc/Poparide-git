import React, { useState, useEffect } from "react";
import styles from "../styles/Trips.module.css";
import RideCard from "../components/Ridecard";
import { convertToPersianNumbers } from "../utility/util";

const mockTrips = [
  {
    id: 1,
    origin: "تهران",
    destination: "رشت",
    availableSeats: 2,
    totalSeats: 4,
    departureTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
    cost: 150000,
    driver: { name: "علی رضایی", avatar: "driver1-avatar.png" },
    car: "پژو",
    duration: "4 ساعت",
  },
  {
    id: 2,
    origin: "اصفهان",
    destination: "شیراز",
    availableSeats: 3,
    totalSeats: 3,
    departureTime: new Date(Date.now() + 30 * 60 * 60 * 1000),
    cost: 300000,
    driver: { name: "مهدی موسوی", avatar: "driver2-avatar.png" },
    car: "پراید",
    duration: "5 ساعت",
  },
];

const Trips = () => {
  const [search, setSearch] = useState("");
  const [cost, setCost] = useState(1000000);
  const [filteredTrips, setFilteredTrips] = useState(mockTrips);

  useEffect(() => {
    const filtered = mockTrips.filter(
      (trip) =>
        (trip.destination.includes(search) || trip.origin.includes(search)) &&
        trip.cost <= cost
    );
    setFilteredTrips(filtered);
  }, [search, cost]);

  return (
    <div className={styles.tripsContainer}>
      <h1 className={styles.title}>سفرهای موجود</h1>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="جستجو بر اساس شهر"
          className={styles.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.sliderContainer}>
          <label>
            حداکثر هزینه: {convertToPersianNumbers(cost.toLocaleString())} تومان
          </label>
          <input
            type="range"
            min={50000}
            max={10000000}
            step={50000}
            value={cost}
            onChange={(e) => setCost(parseInt(e.target.value))}
            className={styles.slider}
          />
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {filteredTrips.length === 0 ? (
          <p className={styles.noResults}>سفری یافت نشد</p>
        ) : (
          filteredTrips.map((trip) => <RideCard key={trip.id} ride={trip} />)
        )}
      </div>
    </div>
  );
};

export default Trips;
