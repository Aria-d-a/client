import { useContext } from "react";
import "./aboutPage.scss";
import { AuthContext } from "../../context/AuthContext";

function AboutPage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="aboutPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Связаться с нами</h1>
          <p>На этой странице вы сможете найти информацию о том, как связаться с сотрудниками нашей компании</p>
          <div className="aboutItem">
          <h2>Коммерческий отдел</h2>
          <p>Если вам нужна помощь в покупке, аренде или продаже недвижимости - позвоните нам:</p>
          <a href="tel:+890000000">8(999)900-00-00</a>
          </div>
          <div className="aboutItem">
          <h2>Юридический отдел</h2>
          <p>Если у вас возникла проблема с оформлением сделки или вам нужна иная помощь - позвоните нам:</p>
          <a href="tel:+890000000">8(999)900-00-00</a>
          </div>
          <div className="aboutItem">
          <h2>Техническая поддержка</h2>
          <p>Если у вас возникли вопросы по использованию площадки - напишите нам. Мы ответим в течение часа в рабочее время:</p>
          <a href="mailto:support@dream-home.ru">support@dream-home.ru</a>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/img-homePage.png" alt="" />
      </div>
    </div>
  );
}

export default AboutPage;
