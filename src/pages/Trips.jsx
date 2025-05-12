// src/pages/Trips.jsx
import React, { useState, useEffect } from "react";
import styles from "../styles/Trips.module.css";

const mockTrips = [
  {
    id: 1,
    origin: "تهران",
    destination: "رشت",
    availableSeats: 2,
    totalSeats: 4,
    departureTime: new Date(Date.now() + 2 * 60 * 60 * 1000), 
    cost: 150000,
    driver: "علی رضایی",
  },
  {
    id: 2,
    origin: "اصفهان",
    destination: "شیراز",
    availableSeats: 3,
    totalSeats: 3,
    departureTime: new Date(Date.now() + 30 * 60 * 60 * 1000), 
    cost: 300000,
    driver: "مهدی موسوی",
  },
];

const formatTimeRemaining = (departureTime) => {
  const now = new Date();
  const diffMs = departureTime - now;

  if (diffMs <= 0) return "در حال حرکت";

  const diffMins = Math.floor(diffMs / (1000 * 60));
  if (diffMins > 1440) {
    const days = Math.floor(diffMins / 1440);
    return `${days} روز`;
  } else {
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;
    return `${hours} ساعت و ${minutes} دقیقه`;
  }
};

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
          <label>حداکثر هزینه: {cost.toLocaleString()} تومان</label>
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
          filteredTrips.map((trip) => (
            <div key={trip.id} className={styles.tripCard}>
              <div className={styles.route}>
                <span>{trip.origin}</span>
                <span> ← </span>
                <span>{trip.destination}</span>
              </div>
              <p className={styles.driver}>راننده: {trip.driver}</p>
              <p className={styles.seats}>
                {trip.availableSeats} صندلی باقیمانده از {trip.totalSeats} صندلی
              </p>
              <p className={styles.time}>
                حرکت در: {formatTimeRemaining(trip.departureTime)}
              </p>
              <p className={styles.cost}>{trip.cost.toLocaleString()} تومان</p>
              <button className={styles.bookBtn}>رزرو</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trips;
