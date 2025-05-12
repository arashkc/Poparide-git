import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginRegister.module.css";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value) => {
    const pattern = /^09\d{9}$/;
    return pattern.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError("شماره تلفن وارد شده درست نیست");
      return;
    }

    setPhoneError("");
    // continue with login/signup logic
    console.log(isLogin ? "Logging in..." : "Signing up...");
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        همسفر
      </Link>

      <div className={styles.card}>
        <h2 className={styles.title}>{isLogin ? "ورود" : "ثبت‌نام"}</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>شماره تلفن</label>
            <input
              type="tel"
              className={`${styles.input} ${
                phoneError ? styles.inputError : ""
              }`}
              placeholder="09123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength="11"
              inputMode="numeric"
              pattern="[0-9]*"
            />
            {phoneError && <div className={styles.errorText}>{phoneError}</div>}
          </div>

          {!isLogin && (
            <div className={styles.formGroup}>
              <label className={styles.label}>کد تأیید</label>
              <input
                type="text"
                className={styles.input}
                placeholder="کد ۵ رقمی"
              />
            </div>
          )}

          <button type="submit" className={styles.button}>
            {isLogin ? "ورود" : "ثبت‌نام"}
          </button>
        </form>

        <p className={styles.switchText}>
          {isLogin ? "حساب کاربری ندارید؟" : "قبلاً ثبت‌نام کرده‌اید؟"}
          <span
            className={styles.switchLink}
            onClick={() => {
              setIsLogin(!isLogin);
              setPhoneError("");
            }}
          >
            {isLogin ? "ثبت‌نام" : "ورود"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginRegister;
