// src/components/TripFilters.jsx
import React, { useState } from "react";
import styles from "./TripFilters.module.css";

const TripFilters = ({ onFilter }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [date, setDate] = useState("");

  const handleSearch = () => {
    onFilter({ origin, destination, minPrice, maxPrice, date });
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="مبدا (مثلاً: رشت)"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="مقصد (مثلاً: تهران)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className={styles.input}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.input}
      />
      <div className={styles.priceRange}>
        <label>محدوده هزینه:</label>
        <input
          type="range"
          min={0}
          max={10000000}
          step={50000}
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="range"
          min={0}
          max={10000000}
          step={50000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <div className={styles.priceLabels}>
          از {minPrice.toLocaleString()} تومان تا {maxPrice.toLocaleString()}{" "}
          تومان
        </div>
      </div>
      <button className={styles.button} onClick={handleSearch}>
        جستجو
      </button>
    </div>
  );
};

export default TripFilters;
