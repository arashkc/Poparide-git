import React from "react";
import styles from "../styles/AddTrip.module.css";

const TextInputField = ({ label, name, value, onChange, invalid }) => (
  <div className={`${styles.field} ${styles.flex50}`}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder="فقط حروف فارسی"
      maxLength={30}
      autoComplete="off"
      required
      className={invalid ? styles.invalidInput : ""}
    />
  </div>
);

export default TextInputField;
