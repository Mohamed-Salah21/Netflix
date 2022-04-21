import { useState, useEffect } from "react";
import "./select-ar.scss";
const SelectTag2 = () => {
  const [lang, setLang] = useState("ar");
  useEffect(() => {
    if (lang === "en") window.location = "/";
  }, [lang]);
  return (
    <div className="select-el-ar">
      <i class="fas fa-globe"></i>
      <select defaultValue={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};
export default SelectTag2;
