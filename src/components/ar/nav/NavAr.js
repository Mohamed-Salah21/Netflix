import "./nav-ar.scss";
import SelectTag2 from "../select_ar/SelectAr";
let NavAr = () => {
  return (
    <nav className="nav-ar">
      <div className="logo">
        <h2 className="h2-max-xl">Netflix</h2>
        <h2 className="h2-max-sm">N</h2>
      </div>
      <div className="langs-sign">
        <SelectTag2 />
        <a href="/ar-login">تسجيل الدخول</a>
      </div>
    </nav>
  );
};
export default NavAr;
