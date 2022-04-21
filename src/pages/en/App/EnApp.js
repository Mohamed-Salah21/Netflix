import "./en-app.scss";
import "./en-app-media.scss";
import tvScreenImage from "../../../media/tv.png";
import video1 from "../../../media/video-tv-0819.m4v";
import video2 from "../../../media/video-devices.m4v";
import mobileImage from "../../../media/mobile.jpg";
import stringThingsImage from "../../../media/stranger-things.png";
import animatedDwonloadImage from "../../../media/download.gif";
import devicesImage from "../../../media/devices.png";
import kidsImage from "../../../media/kids.png";
import { useState } from "react";
import FooterEn from "../../../components/en/footer/FooterEn";
import NavEn from "../../../components/en/nav/NavEn";
import questionsEn from "../../../components/en/questionsData/QuestionsDataEn";

var EnglishApp = () => {
  const { questions } = questionsEn;
  const [selected, setSelected] = useState(null);

  const showAnswers = (index) => {
    if (selected === index) return setSelected(null);
    setSelected(index);
  };
  console.log(selected);
  return (
    <div class="english-page">
      <NavEn />
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
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. cancel anytime </h3>
            <h4 className="h4-large">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <h4 className="h4-small">
              Ready to watch? Enter your email <br /> to create or restart your
              <br /> membership.
            </h4>
            <div className="inputs">
              <input type="text" placeholder="Email Address" />
              <button>
                <span>Get Started</span>
                <i class="fas fa-chevron-right"></i>
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
                <h1>Enjoy on your TV.</h1>
                <p>
                  Watch on Smart TVs, Playstation, xbox, chromecast, Apple Tv,
                  Blu-plyers, and more.
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
                <img src={mobileImage} className="screen-image" alt="tv.img" />
                <div className="download">
                  <img
                    className="strang-things-image"
                    src={stringThingsImage}
                    alt=""
                  />
                  <div className="texts">
                    <h4>Strang Things</h4>
                    <span>Download...</span>
                  </div>
                  <img
                    className="animated-image"
                    src={animatedDwonloadImage}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="text">
              <div className="text-container">
                <h1>Download your shows to watch offline.</h1>
                <p>
                  save your favourites easily and always have sometimes to
                  watch.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="watch-everywhere">
          <div className="inner-container">
            <div className="text">
              <div className="text-container">
                <h1>Watch everywhere.</h1>
                <p>
                  stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV without playing more.
                </p>
              </div>
            </div>
            <div className="gallery">
              <div className="screen">
                <video src={video2} muted loop autoPlay={"autoplay"}></video>
                <img src={devicesImage} className="screen-image" alt="tv.img" />
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
                <h1>Create Profiles for Kids</h1>
                <p>
                  send kids on adventures with thier favourite characters in a
                  space made just for them free with your membership.
                </p>
              </div>
            </div>
          </div>
          h1
        </div>
      </section>
      <section className="third-section">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          {questions.map((item) => {
            return (
              <div className="question" key={item.id}>
                <div className="the-question" onClick={() => showAnswers(item)}>
                  <h2> {item.question} </h2>
                  <div className="marks">
                    {selected === item ? (
                      <i class="fa fa-times"></i>
                    ) : (
                      <i class="fas pluss fa-plus"></i>
                    )}
                  </div>
                </div>
                <div className={`the-answer ${selected === item && "showing"}`}>
                  <article>
                    <div> {item.answer_1} </div>
                    <div className="another-answer">{item.answer_2}</div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="h4-large">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <h4 className="h4-small">
          Ready to watch? Enter your email <br /> to create or restart your
          <br /> membership.
        </h4>
        <div className="inputs">
          <input type="text" placeholder="Email Address" />
          <button>
            <span>Get Started</span>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
      <FooterEn />
    </div>
  );
};
export default EnglishApp;
