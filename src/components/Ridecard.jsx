import React, { useEffect, useState } from "react";
import styles from "../styles/RideCard.module.css";
import { Link } from "react-router-dom";
import { convertToPersianNumbers } from "../utility/util";

const RideCard = ({ ride }) => {
  if (!ride) return null;

  // Normalize data for compatibility
  const {
    id = "default-id",
    origin = "نامشخص",
    destination = "نامشخص",
    departureTime = new Date(),
    duration = "نامشخص",
    driver = { name: "نامشخص", avatar: "default-avatar.png" },
    car = "نامشخص",
  } = ride;

  const totalSeats = ride.seatsTotal ?? ride.totalSeats ?? 0;
  const availableSeats = ride.seatsLeft ?? ride.availableSeats ?? 0;
  const price = ride.price ?? ride.cost ?? 0;

  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const rideDateTime = new Date(departureTime);

    if (isNaN(rideDateTime)) {
      setCountdown("زمان نامعتبر");
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const diff = rideDateTime - now;

      if (diff > 86400000) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setCountdown(`${convertToPersianNumbers(days)} روز باقی‌مانده`);
      } else if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        setCountdown(
          `در ${convertToPersianNumbers(
            hours
          )} ساعت و ${convertToPersianNumbers(minutes)} دقیقه`
        );
      } else {
        setCountdown("در حال حرکت یا تمام شده");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [departureTime]);

  const formattedDate = new Date(departureTime).toLocaleDateString("fa-IR");
  const formattedTime = new Date(departureTime).toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Link to={`/tripdetails/${id}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.route}>
          <span className={styles.city}>{origin}</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.city}>{destination}</span>
        </div>
        <div className={styles.price}>
          {convertToPersianNumbers(price.toLocaleString())} تومان
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.infoBlock}>
          <span>حرکت:</span>
          <strong>
            {formattedDate} - {formattedTime}
          </strong>
        </div>
        <div className={styles.infoBlock}>
          <span>مدت:</span>
          <strong>{duration}</strong>
        </div>
        <div className={styles.infoBlock}>
          <span>صندلی‌ها:</span>
          <strong>
            {convertToPersianNumbers(availableSeats)} از{" "}
            {convertToPersianNumbers(totalSeats)}
          </strong>
        </div>
      </div>

      <div className={styles.countdown}>{countdown}</div>

      <div className={styles.footer}>
        <div className={styles.driver}>
          <img
            src={driver.avatar || "default-avatar.png"}
            alt={driver.name || "نامشخص"}
            className={styles.avatar}
          />
          <div>
            <div className={styles.name}>{driver.name || "نامشخص"}</div>
            <div className={styles.car}>{car}</div>
          </div>
        </div>
        <button className={styles.button}>جزئیات</button>
      </div>
    </Link>
  );
};

export default RideCard;
