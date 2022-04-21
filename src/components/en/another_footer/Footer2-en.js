import "./footer2-en.scss";
import "./footer2-en-media.scss";
import SelectTag from "../select/Select";
function Footer2() {
  return (
    <footer className="footer2-en">
      <div className="footer2-en-container">
        <h4>Question? Contact Us.</h4>
        <div className="columns">
          <div>
            <li>FAG</li>
            <li>cookie preference</li>
          </div>
          <div>
            <li>help center</li>
            <li>corporate information</li>
          </div>
          <div>
            <li>terms of uses</li>
          </div>
          <div>
            <li>privacy</li>
          </div>
        </div>
        <SelectTag />
        <p className="netflix-egy">Netflix Egypt</p>
      </div>
    </footer>
  );
}
export default Footer2;
