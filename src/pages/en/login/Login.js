import "./login.scss";
import facebookImg from "../../../media/facebook.png";
import Footer2 from "../../../components/en/another_footer/Footer2-en";
import { useState } from "react";
let LoginPage = () => {
  const loginWithFacebook =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=163114453728333&kid_directed_site=0&app_id=163114453728333&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fapp_id%3D163114453728333%26cbt%3D1634666873462%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df1f17734cf18fbc%2526domain%253Dwww.netflix.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Ff3ec18e50ae1394%2526relation%253Dopener%26client_id%3D163114453728333%26display%3Dpopup%26domain%3Dwww.netflix.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.netflix.com%252Feg-en%252Flogin%26locale%3Den_US%26logger_id%3Df3996660fa9416c%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df356abaa7a952e8%2526domain%253Dwww.netflix.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Ff3ec18e50ae1394%2526relation%253Dopener%2526frame%253Df216abf13a92728%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26sdk%3Djoey%26version%3Dv2.9%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df356abaa7a952e8%26domain%3Dwww.netflix.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.netflix.com%252Ff3ec18e50ae1394%26relation%3Dopener%26frame%3Df216abf13a92728%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0";
  const [isExisted, setIsExisted] = useState(false);

  return (
    <div className={`login-page ${isExisted && "more-height"}`}>
      <div className="container">
        <nav>
          <h2>
            <a href="/"> Netflix </a>
          </h2>
        </nav>
        <div className="login-elements">
          <h4>sign in </h4>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="password" />
          <button> Sign In </button>
          <div className="remember">
            <div>
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember Me</label>
            </div>
            <a href="/loginHelp"> Need Help? </a>
          </div>

          <div className="login-by-facebook">
            <img src={facebookImg} alt="facebook" />
            <a href={loginWithFacebook} target="_blank" rel="noreferrer">
              login with facebook
            </a>
          </div>
          <div className="sign-up">
            <span>New To Netflix </span>
            <a href="/" rel="noreferrer">
              Sign Up now
            </a>
          </div>
          <article>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            {!isExisted && (
              <span onClick={() => setIsExisted(true)}> Learn more</span>
            )}
          </article>
          {isExisted && (
            <article>
              The information collected by Google reCAPTCHA is subject to the
              Google
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              and
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>
              , and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalized advertising by Google).
            </article>
          )}
        </div>
        <Footer2 />
      </div>
    </div>
  );
};
export default LoginPage;
