import React, { useState } from "react";
import TextInputField from "../components/TextInputField";
import SeatSelector from "../components/SeatSelector";
import PersianDatePicker from "../components/PersianDatePicker";
import PriceInput from "../components/PriceInput";
import styles from "../styles/AddTrip.module.css";

const isPersian = (text) => /^[\u0600-\u06FF\s]*$/.test(text);

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

    // For origin/destination allow only Persian letters and spaces, but allow clearing
    if (
      (name === "origin" || name === "destination") &&
      value !== "" &&
      !isPersian(value)
    ) {
      return; // Prevent invalid input but allow empty string for deletion
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (price) => {
    setFormData((prev) => ({ ...prev, price }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, departure: date }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.origin.trim()) errors.origin = "مبدا را وارد کنید";
    if (!formData.destination.trim()) errors.destination = "مقصد را وارد کنید";
    if (!formData.departure) errors.departure = "تاریخ حرکت را انتخاب کنید";
    if (!formData.seatsLeft)
      errors.seatsLeft = "تعداد صندلی‌های موجود را وارد کنید";

    if (!formData.totalSeats) {
      errors.totalSeats = "تعداد کل صندلی‌ها را وارد کنید";
    } else if (Number(formData.totalSeats) < Number(formData.seatsLeft)) {
      errors.totalSeats =
        "تعداد کل صندلی‌ها باید برابر یا بیشتر از صندلی‌های موجود باشد";
    }

    if (!formData.price || Number(formData.price) === 0)
      errors.price = "قیمت را وارد کنید";

    setInvalidFields(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Submitting trip:", formData);
      // TODO: Submit form data
    } else {
      console.log("Validation failed", invalidFields);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>افزودن سفر جدید</h2>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <TextInputField
          label="مبدا"
          id="origin"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          placeholder="فقط حروف فارسی"
          invalid={!!invalidFields.origin}
          errorText={invalidFields.origin}
        />
        <TextInputField
          label="مقصد"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="فقط حروف فارسی"
          invalid={!!invalidFields.destination}
          errorText={invalidFields.destination}
        />

        <PersianDatePicker
          value={formData.departure}
          onChange={handleDateChange}
          invalid={!!invalidFields.departure}
          errorText={invalidFields.departure}
        />

        <SeatSelector
          label="صندلی‌های موجود"
          id="seatsLeft"
          name="seatsLeft"
          value={formData.seatsLeft}
          onChange={handleChange}
          invalid={!!invalidFields.seatsLeft}
          errorText={invalidFields.seatsLeft}
        />

        <SeatSelector
          label="کل صندلی‌ها"
          id="totalSeats"
          name="totalSeats"
          value={formData.totalSeats}
          onChange={handleChange}
          invalid={!!invalidFields.totalSeats}
          errorText={invalidFields.totalSeats}
        />

        <div className={styles.field}>
          <label htmlFor="price">قیمت (ریال)</label>
          <PriceInput
            value={formData.price}
            onChange={handlePriceChange}
            id="price"
            className={invalidFields.price ? styles.invalidInput : ""}
          />
          {invalidFields.price && (
            <p className={styles.errorText}>{invalidFields.price}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          ثبت سفر
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
