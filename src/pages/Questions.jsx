import React, { useEffect, useRef } from "react";
import styles from "../styles/Questions.module.css";
import travelImg from "../assets/travel-banner.jpg";

const fadeInOnScroll = (elements) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    if (el) observer.observe(el);
  });
};

const Questions = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    fadeInOnScroll(sectionsRef.current);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>همسفر - سفر هوشمند و مقرون‌به‌صرفه</h1>
          <p className={styles.heroSubtitle}>پلتفرم اشتراک سفرهای بین‌شهری برای ایرانیان</p>
        </div>
        <img src={travelImg} alt="همسفر" className={styles.heroImage} />
      </section>

      {[
        {
          title: "همسفر چیست؟",
          content: "همسفر یک پلتفرم مدرن برای اشتراک سفرهای بین‌شهری است...",
        },
        {
          title: "چرا همسفر؟",
          content: (
            <ul>
              <li>کاهش هزینه سفر با تقسیم کرایه</li>
              <li>یافتن هم‌سفر با سلیقه مشابه</li>
              <li>سفر راحت بدون نیاز به تاکسی یا اتوبوس</li>
              <li>امنیت بالا با سیستم امتیازدهی و تأیید شماره</li>
            </ul>
          ),
        },
        {
          title: "چطور کار می‌کند؟",
          content:
            "وارد سایت شوید، شماره تلفن خود را ثبت کنید و سفر خود را ایجاد یا رزرو کنید...",
        },
        {
          title: "امنیت سفر",
          content:
            "ما تأکید زیادی بر روی اعتماد و امنیت داریم. با تأیید شماره تماس و سیستم امتیازدهی...",
        },
      ].map((section, idx) => (
        <section
          className={`${styles.section} ${styles.fadeIn}`}
          key={idx}
          ref={(el) => (sectionsRef.current[idx] = el)}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}

      <section className={`${styles.section} ${styles.fadeIn}`} ref={(el) => (sectionsRef.current[4] = el)}>
        <h2>سوالات متداول</h2>
        <div className={styles.faq}>
          <strong>آیا استفاده از همسفر رایگان است؟</strong>
          <p>بله، ثبت‌نام و استفاده از سایت کاملاً رایگان است.</p>
        </div>
        <div className={styles.faq}>
          <strong>آیا شماره تماس من برای دیگران قابل مشاهده است؟</strong>
          <p>خیر، فقط پس از رزرو نهایی، اطلاعات تماس برای طرف مقابل نمایش داده می‌شود.</p>
        </div>
      </section>

      <section className={`${styles.contact} ${styles.fadeIn}`} ref={(el) => (sectionsRef.current[5] = el)}>
        <h2>تماس با ما</h2>
        <p>در صورت هرگونه سؤال یا مشکل، از طریق ایمیل یا شبکه‌های اجتماعی با ما در ارتباط باشید.</p>
        <p>ایمیل: support@hamsafar.ir</p>
      </section>
    </div>
  );
};

export default Questions;
