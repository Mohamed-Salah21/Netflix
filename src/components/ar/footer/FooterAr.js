import "./footer-ar.scss";
import "./footer-ar-media.scss";
import SelectTag2 from "../select_ar/SelectAr";
function FooterAr() {
  return (
    <footer className="footer-ar">
      <div className="container">
        <h4>هل لديك أسئلة؟ اتصل بنا.</h4>
        <div className="columns">
          <div>
            <li>الأسئلة الشائعة </li>
            <li>علاقات المستثمرين</li>
            <li>الخصوية</li>
            <li>اختبار السرعة</li>
          </div>
          <div>
            <li>مركز خدمة العملاء</li>
            <li>الوظائف</li>
            <li>تفضيلات التركيز</li>
            <li>إشعارات قانونية</li>
          </div>
          <div>
            <li>الحساب</li>
            <li>طرق المشاهدة</li>
            <li>معلومات الشركة</li>
            <li>حصرياً علي Netflix</li>
          </div>
          <div>
            <li>المركز الإعلامي</li>
            <li>بنود الاستحدام</li>
            <li>اتصل بنا</li>
          </div>
        </div>
        <SelectTag2 />
        <p className="netflix-egy">Netflix مصر</p>
      </div>
    </footer>
  );
}
export default FooterAr;
