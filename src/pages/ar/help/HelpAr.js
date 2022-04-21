import "./help-ar.scss";
import Footer2Ar from "../../../components/ar/another_footer/Footer2-ar";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProctedArticlesAr from "../../../components/ar/protected/ProctedAr";
import ReactPhoneInput from "../../../components/phone_input/ReactPhone";
var HelpAr = () => {
  const [radio, setRadio] = useState("email");
  return (
    <div className="helping-page-ar">
      <div className="container">
        <nav>
          <h2>
            <a href="/ar">netflix</a>
          </h2>
          <h5>
            <a href="/ar-login">تسجيل الدخول</a>
          </h5>
        </nav>
        <div className="helping-elements-ar">
          <div className="container2">
            <h4>نسيت البريد الالكتروني\كلمة المرور</h4>
            <h5>كيف ترعب في إعادة تعيين كلمة المرور؟</h5>
            <div className="radio-inputs">
              <div>
                <input
                  type="radio"
                  id="email"
                  name="radio"
                  value="email"
                  defaultChecked
                  onChange={(e) => setRadio(e.target.value)}
                />
                <label htmlFor="email"> البريد الالكتروني </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sms"
                  name="radio"
                  value="sms"
                  onChange={(e) => setRadio(e.target.value)}
                />
                <label htmlFor="sms"> رسالة نصية (SMS) </label>
              </div>
            </div>
            {radio === "email" ? (
              <>
                <article>
                  سنرسل إليك بريدًا إلكترونيًا يحتوي على إرشادات حول كيفية إعادة
                  التعيين كلمة السر خاصتك.
                </article>
                <div className="input">
                  <input type="email" placeholder="example@yahoo.com" />
                </div>
                <button>أرسل لي رسالة بريد إلكتروني</button>
              </>
            ) : (
              <>
                <article>
                  سنرسل لك رسالة نصية بها رمز تأكيد لإعادة تعيين كلمة مرورك. قد
                  تُطبّق رسوم الرسائل النصية واستخدام البيانات.
                </article>
                <div className="input input-ReactPhone ">
                  <ReactPhoneInput />
                </div>
                <button>أرسل لي رسالة نصية</button>
              </>
            )}
            <Link to="/ar-rememberInformations">
              لا أتذكر بريدي الإلكتروني أو رقم هاتفي
            </Link>
          </div>
          <ProctedArticlesAr />
        </div>
      </div>
      <Footer2Ar />
    </div>
  );
};

export default HelpAr;
