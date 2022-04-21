import "./ar-app.scss";
import "./ar-app-media.scss";
import tvScreenImage from "../../../media/tv.png";
import video1 from "../../../media/video-tv-0819.m4v";
import video2 from "../../../media/video-devices.m4v";
import mobileImage from "../../../media/mobile.jpg";
import stringThingsImage from "../../../media/stranger-things.png";
import animatedDwonloadImage from "../../../media/download.gif";
import devicesImage from "../../../media/devices.png";
import kidsImage from "../../../media/kids.png";
import FooterAr from "../../../components/ar/footer/FooterAr";
import NavAr from "../../../components/ar/nav/NavAr";
import { BrowserRouter } from "react-router-dom";
import QuestionsAr from "../../../components/ar/questionsData/QuestionsDataAr";
import { useState } from "react";
var ArabicApp = () => {
  const [selected, setSelected] = useState(null);
  const { questions } = QuestionsAr;
  const showAnswers = (index) => {
    if (selected === index) return setSelected(null);
    setSelected(index);
  };
  return (
    <div class="arabic-page">
      <BrowserRouter>
        <NavAr />

        <form className="another-langs-list">
          <div className="lang">
            <label htmlFor="English">English</label>
            <input checked type="radio" name="language" value="English" />
          </div>
          <div className="lang">
            <label htmlFor="arabic">العربية</label>
            <input type="radio" name="language" value="arabic" />
          </div>
        </form>
        <section className="first-section">
          <div className="container">
            <div className="elements">
              <h1>
                عدد لا حصر له من الافلام و العروض التلفزيونية <br />و غيرها
              </h1>
              <h3>شاهد اينما كنت. يمكنك الالغاء متي شئت</h3>
              <h4 className="h4-large">
                هل انت جاهز للمشاهدة؟ أدخل بريدك الالكتروني لإنشاء عضويتك أو
                إعادة تشغيلها
              </h4>

              <h4 className="h4-small">
                هل انت جاهز للمشاهدة؟ أدخل بريدك الالكتروني <br /> لإنشاء عضويتك
                أو إعادة تشغيلها
              </h4>

              <div className="inputs">
                <input type="text" placeholder="البريد الالكتروني" />
                <button>
                  <span>ابدأ</span>
                  <i class="fas fa-chevron-left"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="enjoy-tv">
            <div className="inner-container">
              <div className="text">
                <div className="text-container">
                  <h1>استمتع بالمشاهدة علي تلفزيونك.</h1>
                  <p>
                    شاهد علي أجهزة التلفزيون الذكية و playstation و Xbox و
                    Chromecast و Apple TV و مشغلات blu-ray و المزيد.
                  </p>
                </div>
              </div>
              <div className="gallery">
                <div className="screen">
                  <video src={video1} muted loop autoPlay={"autoplay"}></video>
                  <img
                    src={tvScreenImage}
                    className="screen-image"
                    alt="tv.img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="download-shows">
            <div className="inner-container">
              <div className="gallery">
                <div className="screen">
                  <img
                    src={mobileImage}
                    className="screen-image"
                    alt="tv.img"
                  />
                  <div className="download">
                    <img
                      className="strang-things-image"
                      src={stringThingsImage}
                      alt=""
                    />
                    <div className="texts">
                      <h4>Strang Things</h4>
                      <span>جاري التنزيل...</span>
                    </div>
                    <img
                      className="animated-image"
                      src={animatedDwonloadImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="text">
                <div className="text-container">
                  <h1>
                    يمكنك تنزيل عروضك المفضلة للاستمتاع بمشهادتها دون اتصال.
                  </h1>
                  <p>
                    احفظ أعمالك المفضلة بسهولة لتتمكن دائماً من مشاهدة ما تريد.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="watch-everywhere">
            <div className="inner-container">
              <div className="text">
                <div className="text-container">
                  <h1>شاهد في أي مكان.</h1>
                  <p>
                    شاهد أفلاماً و عروضاً تلفزيونية لا حصر لها علي هاتأو جهازك
                    اللوحي أو حاسوبك المحمول أو حتي علي تلفزيونك دون أن تدفع
                    المزيد
                  </p>
                </div>
              </div>
              <div className="gallery">
                <div className="screen">
                  <video src={video2} muted loop autoPlay={"autoplay"}></video>
                  <img
                    src={devicesImage}
                    className="screen-image"
                    alt="tv.img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="kids">
            <div className="inner-container">
              <div className="gallery">
                <div className="screen">
                  <img src={kidsImage} className="screen-image" alt="tv.img" />
                </div>
              </div>
              <div className="text">
                <div className="text-container">
                  <h1>إنشاء ملفات شخصية للاطفال</h1>
                  <p>
                    أطلق العنان لأطفالك لخوض معامرات مثيرة مع شخصياتهم المحبوبة
                    في تجربة مخصصة لهم - ومجاناً ضمن عضويتك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="third-section">
          <h1>الاسئلة الشائعة</h1>
          <div className="questions">
            {/* question */}
            {questions.map((item) => {
              return (
                <div className="question">
                  <div
                    className="the-question"
                    onClick={() => showAnswers(item)}
                  >
                    <h2> {item.question} </h2>
                    <div className="marks">
                      {selected === item ? (
                        <i class="fa fa-times"></i>
                      ) : (
                        <i class="fas pluss fa-plus"></i>
                      )}
                    </div>
                  </div>
                  <div
                    className={`the-answer ${selected === item && "showing"} `}
                  >
                    <article>
                      <div>{item.answer_1}</div>
                      <div className="another-answer">{item.answer_2}</div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
          <h4 className="h4-large">
            هل أنت جاهزٌ للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء عضويتك أو إعادة
            تشغيلها.
          </h4>
          <h4 className="h4-small">
            هل أنت جاهزٌ للمشاهدة؟ أدخل بريدك الإلكتروني <br /> .لإنشاء عضويتك
            أو إعادة تشغيلها
          </h4>
          <div className="inputs">
            <input type="text" placeholder="عنوان البريد الالكتروني" />
            <button>
              <span>ابدأ</span>
              <i class="fas fa-chevron-left"></i>
            </button>
          </div>
        </section>
        <FooterAr />
      </BrowserRouter>
    </div>
  );
};
export default ArabicApp;
