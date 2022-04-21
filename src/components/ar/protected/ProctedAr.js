import { useState } from "react";
import "./protected-ar.scss";
const ProctedArticlesAr = () => {
  const [clicked, setClicking] = useState(false);
  return (
    <div className="articles-ar">
      <article>
        هذه الصفحة محمية بواسطة خدمة reCAPTCHA من Google لضمان أنك لست إنسانًا
        آليًا
        {!clicked && (
          <span onClick={() => setClicking(true)}> تعرف علي المزيد </span>
        )}
      </article>
      {clicked && (
        <article className="article-ar">
          تخضع المعلومات التي تجمعها خدمة reCAPTCHA من Google إلى
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            سياسة الخصوصية
          </a>
          <a
            href="https://policies.google.com/terms "
            target="_blank"
            rel="noreferrer"
          >
            بنود الخدمة
          </a>
          المعمول بهما لدى Google، وتُستخدم لتقديم خدمة reCAPTCHA وصيانتها
          وتحسينها، فضلاً عن أغراض الأمان العامة (لا تُستخدم لأغراض تقديم
          الإعلانات المخصصة بواسطة Google).
        </article>
      )}
    </div>
  );
};
export default ProctedArticlesAr;
