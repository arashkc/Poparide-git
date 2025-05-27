// src/components/userpanel/SupportSection.jsx
import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
    answer:
      "شما می‌توانید از طریق فرم تماس زیر با تیم پشتیبانی در ارتباط باشید.",
  },
  {
    question: "مدت زمان پاسخگویی به تیکت‌ها چقدر است؟",
    answer: "معمولاً در کمتر از ۲۴ ساعت به پیام‌ها پاسخ داده می‌شود.",
  },
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const SupportSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
    >
      <motion.h2
        variants={variants}
        className="text-3xl font-bold mb-8 text-indigo-700"
      >
        پشتیبانی و سوالات متداول
      </motion.h2>

      <motion.div variants={variants} custom={1} className="space-y-6 mb-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={variants}
            custom={index}
            className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-indigo-800">
              {faq.question}
            </h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.form
        variants={variants}
        custom={faqs.length + 1}
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("ارسال پیام در دست توسعه است.");
        }}
      >
        <input
          type="text"
          placeholder="نام شما"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <input
          type="email"
          placeholder="ایمیل شما"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <textarea
          placeholder="پیام شما"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none h-32 resize-none"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg shadow hover:from-indigo-600 hover:to-blue-700 transition"
        >
          ارسال پیام
        </button>
      </motion.form>
    </motion.section>
  );
};

export default SupportSection;
