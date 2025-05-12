import React, { useEffect, useState } from "react";
import styles from "./RideCard.module.css";
import { Link } from "react-router-dom";

const RideCard = ({ ride }) => {
  const {
    id,
    origin,
    destination,
    date,
    time,
    price,
    seatsTotal,
    seatsLeft,
    driver,
    car,
    duration,
  } = ride;

  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const rideDateTime = new Date(`${date}T${time}`);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = rideDateTime - now;

      if (diff > 86400000) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setCountdown(`${days} روز باقی‌مانده`);
      } else if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        setCountdown(`در ${hours}ساعت و ${minutes}دقیقه`);
      } else {
        setCountdown("در حال حرکت یا تمام شده");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date, time]);

  return (
    <Link to={`/tripdetails/${id}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.route}>
          <span className={styles.city}>{origin}</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.city}>{destination}</span>
        </div>
        <div className={styles.price}>{price.toLocaleString()} تومان</div>
      </div>

      <div className={styles.details}>
        <div className={styles.infoBlock}>
          <span>حرکت:</span>
          <strong>
            {date} - {time}
          </strong>
        </div>
        <div className={styles.infoBlock}>
          <span>مدت:</span>
          <strong>{duration}</strong>
        </div>
        <div className={styles.infoBlock}>
          <span>صندلی‌ها:</span>
          <strong>
            {seatsLeft} از {seatsTotal}
          </strong>
        </div>
      </div>

      <div className={styles.countdown}>{countdown}</div>

      <div className={styles.footer}>
        <div className={styles.driver}>
          <img
            src={driver.avatar}
            alt={driver.name}
            className={styles.avatar}
          />
          <div>
            <div className={styles.name}>{driver.name}</div>
            <div className={styles.car}>{car}</div>
          </div>
        </div>
        <button className={styles.button}>جزئیات</button>
      </div>
    </Link>
  );
};

export default RideCard;
