import React from "react";
import styles from "./TripFilters.module.css";

const TripFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.filters}>
      <h2 className={styles.heading}>فیلتر سفرها</h2>

      <div className={styles.filterGroup}>
        <label>مبدا:</label>
        <input
          type="text"
          name="origin"
          value={filters.origin}
          onChange={handleChange}
          placeholder="مثلاً رشت"
        />
      </div>

      <div className={styles.filterGroup}>
        <label>مقصد:</label>
        <input
          type="text"
          name="destination"
          value={filters.destination}
          onChange={handleChange}
          placeholder="مثلاً تهران"
        />
      </div>

      <div className={styles.filterGroup}>
        <label>تاریخ حرکت:</label>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
        />
      </div>

      <div className={styles.filterGroup}>
        <label>محدوده قیمت (تومان):</label>
        <div className={styles.priceRange}>
          <input
            type="number"
            name="minPrice"
            min="50000"
            max="10000000"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="حداقل"
          />
          <span>تا</span>
          <input
            type="number"
            name="maxPrice"
            min="50000"
            max="10000000"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="حداکثر"
          />
        </div>
      </div>
    </div>
  );
};

export default TripFilters;
