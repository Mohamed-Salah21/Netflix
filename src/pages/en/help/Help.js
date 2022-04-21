import "./help.scss";
import Footer2 from "../../../components/en/another_footer/Footer2-en";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProtectedArticles from "../../../components/en/protected/Protected";
import ReactPhoneInput from "../../../components/phone_input/ReactPhone";
var Help = () => {
  const [radio, setRadio] = useState("email");
  return (
    <div className="helping-page">
      <div className="container">
        <nav>
          <h2>
            <a href="/"> Netflix </a>
          </h2>
          <h5>
            <a href="/login"> Sign In </a>
          </h5>
        </nav>
        <div className="helping-elements">
          <div className="container2">
            <h4>Forget Email/Password</h4>
            <h5>How would you like to reset your password?</h5>
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
                <label htmlFor="email"> Email </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sms"
                  name="radio"
                  value="sms"
                  onChange={(e) => setRadio(e.target.value)}
                />
                <label htmlFor="sms"> Text Messege (SMS) </label>
              </div>
            </div>
            {radio === "email" ? (
              <>
                <article>
                  We will send you an email with instructions on how to reset
                  your password.
                </article>
                <div className="input">
                  <input type="email" placeholder="example@yahoo.com" />
                </div>
                <button>Email Me</button>
              </>
            ) : (
              <>
                <article>
                  We will text you a verification code to reset your password.
                  Message and data rates may apply.
                </article>
                <div className="input input-ReactPhone ">
                  <ReactPhoneInput />
                </div>
                <button>Text Me</button>
              </>
            )}
            <Link to="/rememberInformations">
              i don't remember my email or phone
            </Link>
          </div>
          <ProtectedArticles />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Help;
