import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/LoginRegister.module.css";
import { UserContext } from "../context/UserContext"; // adjust path if needed

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loginError, setLoginError] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validatePhone = (value) => {
    const pattern = /^09\d{9}$/;
    return pattern.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError("شماره تلفن وارد شده درست نیست");
      return;
    }
    setPhoneError("");
    setLoginError("");

    try {
      // Simulate login/signup API call, replace with real API call
      let userData;
      if (isLogin) {
        // Example: fake login
        userData = { phone, name: "کاربر نمونه" }; // replace with your API result
      } else {
        // Example: fake signup
        userData = { phone, name: "کاربر جدید" };
      }

      // Simulate success response delay
      await new Promise((res) => setTimeout(res, 500));

      // Set user in context
      setUser(userData);

      // Redirect to user panel after login/signup
      navigate("/user-panel");
    } catch (error) {
      setLoginError("خطا در ورود، لطفا دوباره تلاش کنید");
    }
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

          {loginError && (
            <div className={styles.errorText} style={{ marginBottom: 10 }}>
              {loginError}
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
              setLoginError("");
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
