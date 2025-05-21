import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "../styles/AddTrip.module.css"; // Or a shared style file

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

const formatPersianDate = (dateObj) => {
  if (!dateObj) return "";
  const day = dateObj.day;
  const monthIndex = dateObj.month.index;
  const dayStr = persianOrdinals[day - 1] || day;
  const monthStr = persianMonths[monthIndex] || "";
  return `${dayStr} ${monthStr}`;
};

const PersianDatePicker = ({ value, onChange, invalid }) => {
  const formattedDate = formatPersianDate(value);

  return (
    <div className={styles.field}>
      <label>تاریخ حرکت</label>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={value}
        onChange={onChange}
        calendarPosition="bottom-right"
        format="YYYY/MM/DD"
        minDate={new Date()}
        maxDate={new Date("2030-12-31")}
        inputClass={`${styles.datePicker} ${
          invalid ? styles.invalidInput : ""
        }`}
        onlyCalendar
        editable={false}
        render={<input />}
      />
      <div className={styles.selectedDate}>{formattedDate}</div>
    </div>
  );
};

export default PersianDatePicker;
