import React from "react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-blue-700">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
          نظر کاربران ما
        </h2>
        <div className="space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
            <p className="text-lg italic mb-4">
              "تجربه‌ای تغییر دهنده زندگی! در هزینه رفت و آمدم خیلی صرفه‌جویی
              کرده‌ام."
            </p>
            <p className="font-semibold text-gray-800">علی، تهران</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
            <p className="text-lg italic mb-4">
              "افراد خیلی خوبی رو ملاقات کردم، سفرها واقعا جذاب و خاطره‌انگیز
              شدن!"
            </p>
            <p className="font-semibold text-gray-800">سارا، اصفهان</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
