import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white h-screen flex items-center justify-center rtl">
      <div className="text-center px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          سفر اشتراکی، راحت‌تر از همیشه
        </h1>
        <p className="text-lg md:text-xl mb-6">
          به جامعه‌ای از رانندگان و مسافران بپیوندید که در سراسر ایران سفر
          می‌کنند.
        </p>
        <a
          href="#sign-up"
          className="bg-yellow-500 text-blue-700 py-4 px-10 rounded-full text-lg md:text-xl font-semibold hover:bg-yellow-400 hover:scale-105 transition transform duration-300"
        >
          شروع کنید
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
