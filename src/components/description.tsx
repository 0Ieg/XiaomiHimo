import { FC } from "react"
import styled from "styled-components"
import image from "../BLL/images/description.jpg"

const Styled = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 60px;
padding-bottom: 140px;
margin-top: -120px;
padding-top: 120px;
-webkit-background-clip: content-box;
	background-clip: content-box;
.information{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item{
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title{
      text-transform: uppercase;
      font: 700 18px Inter;
    }
    .text{
      font: 400 14px Inter;
      max-width: 450px;
    }
  }
}
.image{
  border-radius: var(--borrad);
  overflow: hidden;
}
`
export const Description:FC = ()=>{
  return(
    <Styled id="description">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <ul className="information">
        <li className="item">
          <div className="title">Комфорт и безопасность от HIMO</div>
          <div className="text">Электровелосипед HIMO C26 позволит вам быстро и с комфортом добраться до места работы или учебы и не привязываться к городскому транспорту. Велосипед обладает прочной конструкцией и внушительным запасом хода, чтобы стать надежным транспортным средством в современных городских условиях. Легкая и прочная рама, 26-дюймовые колеса и 7-ступенчатая система трансмиссии позволяют уверенно передвигаться не только по асфальтированному дорожному полотну, но и по сложной загородной трассе.</div>
        </li>
        <li className="item">
          <div className="title">Прочная и легкая рама</div>
          <div className="text">Рама HIMO C26 изготовлена из прочного и легкого алюминиевого сплава и отличается высокой надежностью, устойчивостью в аварийных ситуациях, превосходной управляемостью и комфортным передвижением по любой дороге.</div>
        </li>
        <li className="item">
          <div className="title">Комбинация режимов для увеличения запаса хода</div>
          <div className="text">Электровелосипед HIMO C26 обладает увеличенным запасом хода. Его аккумулятор емкостью 10000 мАч с интеллектуальной системой оптимизации энергопотребления позволяет проехать до 60 км на одном заряде в режиме электропривода. При использовании на некоторых участках пути физической силы дальность хода увеличивается до 100 км. Максимальная скорость передвижения HIMO C26 составляет 25 км/ч.</div>
        </li>
        <li className="item">
          <div className="title">Надежная трансмиссия</div>
          <div className="text">7-ступенчатая система трансмиссии обеспечивает плавное и точное переключение передач, удобное управление скоростью и надежность в работе. Переключая передачи, вы сможете с минимальными усилиями заехать на горку и безопасно скатиться вниз.</div>
        </li>
        <li className="item">
          <div className="title">Вся информация на ЖК-дисплее</div>
          <div className="text">Вся информация на ЖК-дисплее.<br/> Большой информативный дисплей, вынесенный на рулевую стойку, отображает всю важную информацию о работе HIMO C26 в реальном времени. Вы сможете узнать актуальную скорость передвижения, уровень заряда или пройденный путь. Дисплей защищен от воздействия внешних факторов по стандарту IPX7 и не боится дождя и пыли.</div>
        </li>
        <li className="item">
          <div className="title">Удобное седло</div>
          <div className="text">Электровелосипед HIMO C26 укомплектован велосипедным седлом от известного бренда Selle Royal. Трехмерная гелевая структура седла обеспечивает оптимальную упругость и высокий комфорт во время езды.</div>
        </li>
      </ul>
    </Styled>
  )
}