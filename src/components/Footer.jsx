import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-4 md:px-8">
        <p className="text-lg">© 2025 YourCarpool. کلیه حقوق محفوظ است.</p>
        <div className="mt-6">
          <a
            href="/about"
            className="text-gray-400 hover:text-white mx-4 text-lg"
          >
            درباره ما
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white mx-4 text-lg"
          >
            تماس با ما
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white mx-4 text-lg"
          >
            سیاست حریم خصوصی
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
