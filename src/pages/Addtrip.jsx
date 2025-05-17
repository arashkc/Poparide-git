import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import PriceInput from "../components/PriceInput";
import styles from "../styles/AddTrip.module.css";

// Only allow Persian letters and spaces for origin and destination
const isPersian = (text) => /^[\u0600-\u06FF\s]*$/.test(text);

// Persian month names:
const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

// Persian ordinal days for 1-31 (examples)
const persianOrdinals = [
  "اول",
  "دوم",
  "سوم",
  "چهارم",
  "پنجم",
  "ششم",
  "هفتم",
  "هشتم",
  "نهم",
  "دهم",
  "یازدهم",
  "دوازدهم",
  "سیزدهم",
  "چهاردهم",
  "پانزدهم",
  "شانزدهم",
  "هفدهم",
  "هجدهم",
  "نوزدهم",
  "بیستم",
  "بیست و یکم",
  "بیست و دوم",
  "بیست و سوم",
  "بیست و چهارم",
  "بیست و پنجم",
  "بیست و ششم",
  "بیست و هفتم",
  "بیست و هشتم",
  "بیست و نهم",
  "سی‌ام",
  "سی و یکم",
];

// Format date to e.g. "سوم خرداد"
const formatPersianDate = (dateObj) => {
  if (!dateObj) return "";
  const day = dateObj.day; // Number day in month
  const monthIndex = dateObj.month.index; // 0-based index of month in Persian calendar
  const dayStr = persianOrdinals[day - 1] || day;
  const monthStr = persianMonths[monthIndex] || "";
  return `${dayStr} ${monthStr}`;
};

const AddTrip = () => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departure: null,
    seatsLeft: "",
    totalSeats: "",
    price: "",
  });

  const [invalidFields, setInvalidFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "origin" || name === "destination") {
      if (value === "" || isPersian(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePriceChange = (price) => {
    setFormData((prev) => ({ ...prev, price }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, departure: date }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.origin.trim()) errors.origin = true;
    if (!formData.destination.trim()) errors.destination = true;
    if (!formData.departure) errors.departure = true;
    if (!formData.seatsLeft) errors.seatsLeft = true;
    if (!formData.totalSeats) errors.totalSeats = true;

    if (
      formData.seatsLeft &&
      formData.totalSeats &&
      Number(formData.totalSeats) < Number(formData.seatsLeft)
    ) {
      errors.totalSeats = true;
    }

    if (
      !formData.price ||
      formData.price.length === 0 ||
      Number(formData.price) === 0
    )
      errors.price = true;

    setInvalidFields(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Submitting trip:", formData);
      // TODO: handle success
    } else {
      console.log("Validation failed", invalidFields);
    }
  };

  // Format Persian date with words like "سوم خرداد"
  const formattedDate = formatPersianDate(formData.departure);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>افزودن سفر جدید</h2>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={`${styles.field} ${styles.flex50}`}>
          <label htmlFor="origin">مبدا</label>
          <input
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="فقط حروف فارسی"
            maxLength={30}
            autoComplete="off"
            required
            className={invalidFields.origin ? styles.invalidInput : ""}
          />
        </div>

        <div className={`${styles.field} ${styles.flex50}`}>
          <label htmlFor="destination">مقصد</label>
          <input
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="فقط حروف فارسی"
            maxLength={30}
            autoComplete="off"
            required
            className={invalidFields.destination ? styles.invalidInput : ""}
          />
        </div>

        <div className={styles.field}>
          <label>تاریخ حرکت</label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={formData.departure}
            onChange={handleDateChange}
            calendarPosition="bottom-right"
            format="YYYY/MM/DD" // keep this for input but we show formattedDate separately
            minDate={new Date()}
            maxDate={new Date("2030-12-31")}
            inputClass={`${styles.datePicker} ${
              invalidFields.departure ? styles.invalidInput : ""
            }`}
            onlyCalendar
            editable={false}
            render={<input />}
          />
          <div className={styles.selectedDate}>{formattedDate}</div>
        </div>

        <div className={`${styles.field} ${styles.flex50}`}>
          <label htmlFor="seatsLeft">صندلی‌های موجود</label>
          <select
            id="seatsLeft"
            name="seatsLeft"
            value={formData.seatsLeft}
            onChange={handleChange}
            className={`${styles.select} ${
              invalidFields.seatsLeft ? styles.invalidInput : ""
            }`}
            required
          >
            <option value="">انتخاب کنید</option>
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.field} ${styles.flex50}`}>
          <label htmlFor="totalSeats">کل صندلی‌ها</label>
          <select
            id="totalSeats"
            name="totalSeats"
            value={formData.totalSeats}
            onChange={handleChange}
            className={`${styles.select} ${
              invalidFields.totalSeats ? styles.invalidInput : ""
            }`}
            required
          >
            <option value="">انتخاب کنید</option>
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {invalidFields.totalSeats && (
            <p className={styles.errorText}>
              تعداد کل صندلی‌ها باید برابر یا بیشتر از صندلی‌های موجود باشد
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label>قیمت (ریال)</label>
          <PriceInput
            value={formData.price}
            onChange={handlePriceChange}
            className={invalidFields.price ? styles.invalidInput : ""}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          ثبت سفر
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
