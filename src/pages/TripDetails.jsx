import React from "react";
import styles from "../styles/TripDetail.module.css";
import { useNavigate } from "react-router-dom";

const TripDetail = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    alert("رزرو شما ثبت شد!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.route}>
          <span>رشت</span>
          <span className={styles.arrow}>→</span>
          <span>تهران</span>
        </div>

        <div className={styles.section}>
          <div className={styles.driverInfo}>
            <img src="/default-avatar.png" alt="Driver" />
            <div>
              <p className={styles.driverName}>علی رضایی</p>
              <p className={styles.rating}>امتیاز: ۴.۸ ★</p>
            </div>
          </div>

          <div className={styles.tripDetails}>
            <p>
              <strong>تاریخ حرکت:</strong> ۲۵ اردیبهشت، ساعت ۰۸:۰۰ صبح
            </p>
            <p>
              <strong>خودرو:</strong> پژو ۲۰۶ - سفید
            </p>
            <p>
              <strong>صندلی‌های باقی‌مانده:</strong> ۲ از ۴
            </p>
            <p>
              <strong>هزینه هر صندلی:</strong> ۱۸۰٬۰۰۰ تومان
            </p>
          </div>

          <button onClick={handleBooking} className={styles.bookBtn}>
            رزرو صندلی
          </button>
        </div>
      </div>

      <button onClick={() => navigate("/trips")} className={styles.backLink}>
        ← بازگشت به لیست سفرها
      </button>
    </div>
  );
};

export default TripDetail;
