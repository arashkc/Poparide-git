// src/pages/SearchResults.jsx
import React, { useState } from "react";
import styles from "../styles/SearchResults.module.css";
import { tripsMock } from "../data/tripsMock";

const SearchResults = () => {
  const [trips, setTrips] = useState(tripsMock);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = tripsMock.filter(
      (trip) => trip.origin.includes(query) || trip.destination.includes(query)
    );
    setTrips(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBarWrapper}>
        <input
          type="text"
          placeholder="جستجوی مقصد یا مبدا..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className={styles.resultsWrapper}>
        {trips.map((trip, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.route}>
              <span className={styles.city}>{trip.origin}</span>
              <span className={styles.arrow}>→</span>
              <span className={styles.city}>{trip.destination}</span>
            </div>

            <div className={styles.details}>
              <p className={styles.driver}>راننده: {trip.driver}</p>
              <p className={styles.seats}>
                {trip.availableSeats} صندلی باقی مانده از {trip.totalSeats}{" "}
                صندلی
              </p>
              <p className={styles.price}>
                {trip.price.toLocaleString()} تومان
              </p>
            </div>

            <div className={styles.footer}>
              <p className={styles.departure}>{trip.departure}</p>
              <button className={styles.bookButton}>رزرو</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
