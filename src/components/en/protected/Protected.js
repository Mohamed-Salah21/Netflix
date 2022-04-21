import { useState } from "react";
import "./protected.scss";
const ProtectedArtcles = () => {
  const [clicked, setClicking] = useState(false);
  return (
    <div className="articles">
      <article>
        This page is protected by Google reCAPTCHA to ensure you're not a bot
        {!clicked && <span onClick={() => setClicking(true)}>see more</span>}
      </article>
      {clicked && (
        <article className="article">
          The information collected by Google reCAPTCHA is subject to the Google
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
          , and is used for providing, maintaining, and improving the reCAPTCHA
          service and for general security purposes (it is not used for
          personalized advertising by Google).
        </article>
      )}
    </div>
  );
};

export default ProtectedArtcles;
