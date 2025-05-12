// RideCard.jsx
import React from "react";
import styles from "./RideCard.module.css";
import { useNavigate } from "react-router-dom";

const RideCard = ({ ride }) => {
  const navigate = useNavigate();

  const {
    origin,
    destination,
    date,
    time,
    driver,
    seats,
    availableSeats,
    price,
    id,
  } = ride;

  const remaining = `${availableSeats} صندلی باقی مانده از ${seats} صندلی`;

  const timeLeft = () => {
    const rideDate = new Date(`${date}T${time}`);
    const now = new Date();
    const diff = rideDate - now;

    if (diff <= 0) return "زمان سپری شده";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    if (hours >= 24) {
      const days = Math.floor(hours / 24);
      return `${days} روز باقی مانده`;
    }

    return `${hours} ساعت و ${minutes} دقیقه باقی مانده`;
  };

  const handleClick = () => {
    navigate(`/trip/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.header}>
        <h3 className={styles.route}>{`${origin} → ${destination}`}</h3>
        <span className={styles.timeLeft}>{timeLeft()}</span>
      </div>

      <div className={styles.info}>
        <p>
          <strong>راننده:</strong> {driver}
        </p>
        <p>
          <strong>تاریخ:</strong> {date}
        </p>
        <p>
          <strong>ساعت حرکت:</strong> {time}
        </p>
        <p className={styles.seats}>{remaining}</p>
        <p className={styles.price}>{price.toLocaleString()} تومان</p>
      </div>
    </div>
  );
};

export default RideCard;
