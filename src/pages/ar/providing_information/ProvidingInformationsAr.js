import Footer2Ar from "../../../components/ar/another_footer/Footer2-ar";
import "./providing-ar.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProctedArticlesAr from "../../../components/ar/protected/ProctedAr";
const ProvidingInformationsAr = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    payment: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="remember-informations-ar-page">
      <div className="container">
        <nav>
          <h2 onClick={() => (window.location = "/ar")}>netflix</h2>
          <h5 onClick={() => (window.location = "/ar-login")}>تسجيل الدخول</h5>
        </nav>
        <div className="remembering-elements-ar">
          <div className="container2">
            <h4>نسيت البريد الالكتروني/كلمة المرور</h4>
            <span>
              يرجى تزويدنا بهذه المعلومات لمساعدتنا في إيجاد حسابك (جميع الحقول
              مطلوبة) :
            </span>
            <div className="input">
              <label> الاسم الأول علي الحساب</label>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label> اسم العائلة الموجود علي الحساب</label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label> رقم بطاقة الائئتمان أو المدين</label>
              <input
                type="text"
                name="payment"
                value={values.payment}
                onChange={handleChange}
              />
            </div>
            <div className="buttons-ar">
              <button
                className={
                  values.firstName.length > 0 &&
                  values.lastName.length > 0 &&
                  values.payment.length > 0 &&
                  "effective"
                }
              >
                إيجاد الحساب
              </button>
              <Link to="/ar-loginHelp"> إلغاء </Link>
            </div>
          </div>
          <ProctedArticlesAr />
        </div>
      </div>
      <Footer2Ar />
    </div>
  );
};
export default ProvidingInformationsAr;
