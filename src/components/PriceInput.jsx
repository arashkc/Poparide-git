import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PriceInput.module.css";

// Convert English digits to Persian
const toPersianDigits = (num) =>
  num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

// Convert Persian digits to English
const toEnglishDigits = (str) =>
  str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

// ✅ FIXED: Format Rials to full Toman string in Persian
const formatPrice = (rialAmount) => {
  if (!rialAmount) return "";

  const toman = Math.floor(rialAmount / 10);

  const millions = Math.floor(toman / 1_000_000);
  const thousands = Math.floor((toman % 1_000_000) / 1_000);
  const remainder = toman % 1_000;

  const parts = [];

  if (millions > 0) parts.push(`${toPersianDigits(millions)} میلیون`);
  if (thousands > 0) parts.push(`${toPersianDigits(thousands)} هزار`);
  if (remainder > 0) parts.push(`${toPersianDigits(remainder)}`);

  return `${parts.join(" و ")} تومان`;
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
        maxLength={8}
        className={styles.priceInput}
        autoComplete="off"
        dir="rtl"
        style={{ direction: "rtl", textAlign: "right" }}
      />
      {value && (
        <div className={styles.pricePreview}>
          {formatPrice(Number(value))}
        </div>
      )}
    </div>
  );
};

export default PriceInput;
