// src/pages/TripDetails.jsx
import React from "react";
import styles from "../styles/TripDetails.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TripDetails = () => {
  const navigate = useNavigate();

  // Dummy trip data (replace with real props or fetch later)
  const trip = {
    origin: "رشت",
    destination: "تهران",
    date: "1404/03/12",
    time: "08:30",
    driver: {
      name: "علی رضایی",
      rating: 4.8,
      avatar: "/images/driver.jpg",
    },
    price: "150,000 تومان",
    totalSeats: 4,
    remainingSeats: 2,
    description:
      "حرکت دقیقاً سر ساعت. فقط یک چمدان کوچک مجاز است. لطفاً راس ساعت در محل حضور داشته باشید.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Route Info */}
        <div className={styles.route}>
          <h2>
            {trip.origin} <ArrowRight className={styles.icon} /> {trip.destination}
          </h2>
          <p>{trip.date} - {trip.time}</p>
        </div>

        {/* Driver Info */}
        <div className={styles.driver}>
          <img src={trip.driver.avatar} alt="driver" />
          <div>
            <h4>{trip.driver.name}</h4>
            <p>امتیاز: {trip.driver.rating} ⭐</p>
          </div>
        </div>

        {/* Seats and Price */}
        <div className={styles.info}>
          <p>
            {trip.remainingSeats} صندلی باقی‌مانده از {trip.totalSeats} صندلی
          </p>
          <p className={styles.price}>{trip.price}</p>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <h5>توضیحات راننده</h5>
          <p>{trip.description}</p>
        </div>

        {/* Button */}
        <button className={styles.button} onClick={() => alert("در حال توسعه")}>
          رزرو این سفر
        </button>

        {/* Back */}
        <button className={styles.back} onClick={() => navigate(-1)}>
          بازگشت
        </button>
      </div>
    </div>
  );
};

export default TripDetails;
