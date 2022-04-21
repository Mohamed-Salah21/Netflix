import "./footer-en.scss";
import "./footer-en-media.scss";
import SelectTag1 from "../select/Select";
function FooterEn() {
  return (
    <footer className="footer-en">
      <div className="container">
        <h4>Question? Contact Us.</h4>
        <div className="columns">
          <div>
            <li>FAG</li>
            <li>investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </div>
          <div>
            <li>help center</li>
            <li>jobs</li>
            <li>cookie preference</li>
            <li>legai notics</li>
          </div>
          <div>
            <li>account</li>
            <li>ways to watch</li>
            <li>corporate information</li>
            <li>only on netflix</li>
          </div>
          <div>
            <li>media center</li>
            <li>terms of uses</li>
            <li>contact us</li>
          </div>
        </div>
        <SelectTag1 />
        <p className="netflix-egy">Netflix Egypt</p>
      </div>
    </footer>
  );
}
export default FooterEn;
