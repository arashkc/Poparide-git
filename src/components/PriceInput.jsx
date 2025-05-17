import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PriceInput.module.css";

// Convert English digits to Persian
const toPersianDigits = (num) =>
  num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

// Convert Persian digits to English
const toEnglishDigits = (str) =>
  str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

// Format Rials to Toman string in Persian
const formatPrice = (rialAmount) => {
  if (!rialAmount) return "";

  const toman = Math.floor(rialAmount / 10); // Convert to toman

  if (toman < 1000) {
    return `${toPersianDigits(toman)} تومان`;
  }

  if (toman < 1_000_000) {
    const thousands = Math.floor(toman / 1000);
    const remainder = toman % 1000;

    return remainder === 0
      ? `${toPersianDigits(thousands)} هزار تومان`
      : `${toPersianDigits(thousands)} هزار و ${toPersianDigits(
          remainder
        )} تومان`;
  }

  const millions = Math.floor(toman / 1_000_000);
  const thousands = Math.floor((toman % 1_000_000) / 1000);

  if (thousands === 0) {
    return `${toPersianDigits(millions)} میلیون تومان`;
  }

  return `${toPersianDigits(millions)} میلیون و ${toPersianDigits(
    thousands
  )} هزار تومان`;
};

const PriceInput = ({ value, onChange }) => {
  const inputRef = useRef(null);
  const [internalValue, setInternalValue] = useState(
    toPersianDigits(value || "")
  );

  useEffect(() => {
    setInternalValue(toPersianDigits(value || ""));
  }, [value]);

  const handleChange = (e) => {
    let val = e.target.value;
    val = val.replace(/[^\d۰-۹]/g, "");
    const englishDigits = toEnglishDigits(val);
    setInternalValue(toPersianDigits(englishDigits));
    onChange(englishDigits);
  };

  return (
    <div className={styles.priceInputWrapper}>
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={internalValue}
        onChange={handleChange}
        placeholder="مثال: ۲۰۰۰۰۰۰"
        maxLength={8} // ✅ 8-digit limit
        className={styles.priceInput}
        autoComplete="off"
        dir="rtl"
        style={{ direction: "rtl", textAlign: "right" }}
      />
      {value && (
        <div className={styles.pricePreview}>{formatPrice(Number(value))}</div>
      )}
    </div>
  );
};

export default PriceInput;
