import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 rtl">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          چرا ما را انتخاب کنید؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">سفرهای ارزان</h3>
            <p className="text-lg text-gray-600">
              .با اشتراک‌گذاری سفرها، در هزینه‌های روزانه‌تان صرفه‌جویی کنید.
            </p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">ایمنی و اعتماد</h3>
            <p className="text-lg text-gray-600">
              جامعه ما بر اساس اعتماد ساخته شده است تا سفرهای امنی برای همه
              فراهم کند.
            </p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">راحتی</h3>
            <p className="text-lg text-gray-600">
              سفر خود را هر زمان و هر کجا که باشید، به راحتی از گوشی خود پیدا
              کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
