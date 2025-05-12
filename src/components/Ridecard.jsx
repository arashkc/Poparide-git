import React, { useEffect, useState } from "react";
import styles from "../styles/RideCard.module.css";
import { Link } from "react-router-dom";
import { convertToPersianNumbers } from "../utility/util";

const RideCard = ({ ride }) => {
  const {
    id,
    origin = "نامشخص",
    destination = "نامشخص",
    departureTime = new Date(),
    cost = 0,
    seatsTotal = 0,
    seatsLeft = 0,
    driver = { name: "نامشخص", avatar: "default-avatar.png" },
    car = "نامشخص",
    duration = "نامشخص",
  } = ride || {};

  const [countdown, setCountdown] = useState("");

  // Format the date and time
  const rideDateTime = new Date(departureTime);
  const date = rideDateTime.toLocaleDateString("fa-IR"); // Persian date format
  const time = rideDateTime.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }); // Persian time format

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = rideDateTime - now;

      if (diff > 86400000) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setCountdown(`${days} روز باقی‌مانده`);
      } else if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        setCountdown(`در ${hours} ساعت و ${minutes} دقیقه`);
      } else {
        setCountdown("در حال حرکت یا تمام شده");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rideDateTime]);

  return (
    <Link to={`/tripdetails/${id || "default-id"}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.route}>
          <span className={styles.city}>{origin}</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.city}>{destination}</span>
        </div>
        <div className={styles.price}>
          {convertToPersianNumbers((cost || 0).toLocaleString())} تومان
        </div>
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
            {convertToPersianNumbers(seatsLeft)} از{" "}
            {convertToPersianNumbers(seatsTotal)}
          </strong>
        </div>
      </div>

      <div className={styles.countdown}>{countdown}</div>

      <div className={styles.footer}>
        <div className={styles.driver}>
          <img
            src={driver?.avatar || "default-avatar.png"}
            alt={driver?.name || "نامشخص"}
            className={styles.avatar}
          />
          <div>
            <div className={styles.name}>{driver?.name || "نامشخص"}</div>
            <div className={styles.car}>{car}</div>
          </div>
        </div>
        <button className={styles.button}>جزئیات</button>
      </div>
    </Link>
  );
};

export default RideCard;
