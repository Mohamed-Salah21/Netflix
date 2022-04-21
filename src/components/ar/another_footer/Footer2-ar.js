import "./footer2-ar.scss";
import "./footer2-ar-media.scss";
import SelectTag2 from "../select_ar/SelectAr";
function Footer2Ar() {
  return (
    <footer className="footer2-ar">
      <div className="footer2-ar-container">
        <h4>هل لديك أسئلة؟ اتصل بنا.</h4>
        <div className="columns">
          <div>
            <li>الاسئلة الشائعة</li>
            <li>تفضيلات التركيز</li>
          </div>
          <div>
            <li>مركز خدمة العملاء</li>
            <li>معلومات الشركة</li>
          </div>
          <div>
            <li>بنود الاستخدام</li>
          </div>
          <div>
            <li>الخصوصية</li>
          </div>
        </div>
        <SelectTag2 />
        <p className="netflix-egy">Netflix مصر</p>
      </div>
    </footer>
  );
}
export default Footer2Ar;
