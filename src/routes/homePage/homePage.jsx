import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Найдите дом своей мечты</h1>
          <p>
          Ищете свой идеальный дом? Компания Dream Home поможет вам найти его. Мы предлагаем широкий выбор домов и квартиры в различных ценовых диапазонах, так что вы сможете найти именно то, что ищете. Ищете ли вы свое первое жилье или роскошное участок, у нас найдется идеальный вариант для вас.</p>
          <p>В Dream Home мы понимаем, что каждая сделка с недвижимостью уникальна. Именно поэтому мы сотрудничаем с вами на всем протяжении процесса покупки или продажи, чтобы понять ваши потребности и предпочтения, и подбираем услуги в соответствии с вашими конкретными целями. Если вы хотите купить, продать, сдать в аренду или инвестировать в рынок недвижимости, мы обладаем достаточными знаниями и опытом, чтобы помочь вам достичь успешного завершения сделки.</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>20</h1>
              <h2>Лет опыта</h2>
            </div>
            <div className="box">
              <h1>Более 10</h1>
              <h2>Полученных наград </h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Готовых объектов</h2>
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

export default HomePage;
