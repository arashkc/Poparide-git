import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/UserPanel.module.css";

const UserPanel = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/loginregister");
    }
  }, [user, loading, navigate]);

  if (loading)
    return <div className={styles.container}>در حال بارگذاری...</div>;
  if (!user) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>پنل کاربری</h1>
      <p className={styles.welcomeText}>
        خوش آمدید، {user.name || user.email}!
      </p>

      <div className={styles.section}>
        <h2>اطلاعات حساب</h2>
        <div className={styles.infoBox}>
          <p>
            <strong>نام کاربری:</strong> {user.name || "نامشخص"}
          </p>
          <p>
            <strong>ایمیل:</strong> {user.email || "example@gmail.com"}
          </p>
          {/* Add more user details here */}
        </div>
      </div>

      <button className={styles.button} onClick={() => navigate("/")}>
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
};

export default UserPanel;
