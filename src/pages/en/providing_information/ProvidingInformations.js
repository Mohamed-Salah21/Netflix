import { useState } from "react";
import Footer2 from "../../../components/en/another_footer/Footer2-en";
import "./providing.scss";
import { Link } from "react-router-dom";
import ProtectedArtcles from "../../../components/en/protected/Protected";
const ProvidingInformations = () => {
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
    <div className="remember-informations-page">
      <div className="container">
        <nav>
          <h2>
            <a href="/">netflix</a>
          </h2>
          <h5>
            <a href="/login">Sign In </a>
          </h5>
        </nav>
        <div className="remembering-elements">
          <div className="container2">
            <h4>forget email/password</h4>
            <span>
              Please provide this information to help us find your account (all
              fields required):
            </span>
            <div className="input">
              <label> First name on account</label>
              <input
                type="text"
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </div>
            <div className="input">
              <label> Last name on account</label>
              <input
                type="text"
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </div>
            <div className="input">
              <label> Credit or debit card number on file</label>
              <input
                type="text"
                value={values.payment}
                onChange={handleChange}
                name="payment"
              />
            </div>
            <div className="buttons">
              <button
                className={
                  values.firstName.length > 0 &&
                  values.lastName.length > 0 &&
                  values.payment.length > 0 &&
                  "effective"
                }
              >
                find account
              </button>
              <Link to="/loginHelp"> cancel </Link>
            </div>
          </div>
          <ProtectedArtcles />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default ProvidingInformations;
