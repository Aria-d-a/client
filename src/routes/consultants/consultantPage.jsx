import { useContext } from "react";
import "./consultantPage.scss";
import { AuthContext } from "../../context/AuthContext";

function ConsultantPage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="consultantPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Наши сотрудники</h1>
          <h2>Коммерческий отдел</h2>
          <div className="aboutItem">
            <div className="itemInfo">
              <p><b>Чистякова Людмила</b><br />Загородная недвижимость</p>
              <a href="mailto:lv.chistyakova@dream-home.ru">lv.chistyakova@dream-home.ru</a>
            </div>
            <div className="itemInfo">
              <p><b>Мершиев Денис</b><br />Городская недвижимость</p>
              <a href="mailto:nd.mershiev@dream-home.ru">nd.mershiev@dream-home.ru</a>
            </div>
          </div>
          <h2>Юридический отдел</h2>
          <div className="aboutItem">
          <div className="itemInfo">
              <p><b>Кузнецова Александра</b><br />Юрист</p>
              <a href="mailto:ab.kuznetsova@dream-home.ru">ab.kuznetsova@dream-home.ru</a>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/img-homePage.png" alt="" />
      </div>
    </div>
  );
}

export default ConsultantPage;
