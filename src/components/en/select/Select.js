import { useState, useEffect } from "react";
import "./select.scss";
const SelectTag1 = () => {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    if (lang === "ar") window.location = "/ar";
  }, [lang]);
  return (
    <div className="select-el">
      <i class="fas fa-globe"></i>
      <select defaultValue={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};
export default SelectTag1;
