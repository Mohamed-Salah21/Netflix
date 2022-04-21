import "./nav-en.scss";
import SelectTag1 from "../select/Select";
let NavEn = () => {
  return (
    <nav className="nav-en">
      <div className="logo">
        <h2 className="h2-max-xl">Netflix</h2>
        <h2 className="h2-max-sm">N</h2>
      </div>
      <div className="langs-sign">
        <SelectTag1 />
        <a href="/login">sign in</a>
      </div>
    </nav>
  );
};
export default NavEn;
