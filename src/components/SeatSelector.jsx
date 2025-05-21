import React from "react";
import styles from "../styles/AddTrip.module.css";

const SeatSelector = ({ name, value, onChange, invalid, label }) => (
  <div className={`${styles.field} ${styles.flex50}`}>
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`${styles.select} ${invalid ? styles.invalidInput : ""}`}
      required
    >
      <option value="">انتخاب کنید</option>
      {[1, 2, 3, 4].map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  </div>
);

export default SeatSelector;
