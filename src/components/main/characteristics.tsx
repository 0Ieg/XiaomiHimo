import { FC } from "react";
import styled from "styled-components";
import image from "../../BLL/images/characteristics.jpg"

const Styled = styled.section`
height: 100dvh;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 60px;
margin-top: -120px;
padding-top: 120px;
.table{
  height: 700px;
  border-spacing: 10px 0px;
  border-collapse: collapse;
  .caption{
    font: 700 18px Inter;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 40px;
  }
  .tbody{
    .title{
      color: var(--color-white);
      background-color: var(--color-black);
      text-transform: uppercase;
      font: 700 16px Inter;
    }
    .content{
      font: 400 16px Inter;
      td:nth-child(2){
        width: 60%;
        padding-left: 10px;
      }
    }
  }
}
.image{
  display: flex;
  align-self: center;
}
`
export const Characteristics:FC = ()=>{
  return(
    <Styled id="characteristics">
      <table className="table">
        <caption className="caption">ХАрактеристики</caption>
        <tbody className="tbody">
          <tr className="title general">
            <th colSpan={2}>Общие</th>
          </tr>
          <tr className="content">
            <td>Производитель</td>
            <td>Производитель</td>
          </tr>
          <tr className="content">
            <td>Вид</td>
            <td>взрослый, дорожный, городской, электровелосипед, алюминиевая рама</td>
          </tr>
          <tr className="content">
            <td>Колеса</td>
            <td>26, двойной алюминиевый обод</td>
          </tr>
          <tr className="content">
            <td>Электропривод</td>
            <td>мотор 250W, разгон до 25 км/ч</td>
          </tr>
          <tr className="title amortization">
            <th colSpan={2}>амортизация</th>
          </tr>
          <tr className="content">
            <td>Тип амортизации</td>
            <td>амортизирующая вилка (Hard tail)</td>
          </tr>
          <tr className="content">
            <td>Вилка</td>
            <td>пружинно-эластомерная</td>
          </tr>
          <tr className="title управление">
            <th colSpan={2}>амортизация</th>
          </tr>
          <tr className="content">
            <td>Руль</td>
            <td>изогнутый, регулируемый подъем</td>
          </tr>
          <tr className="content">
            <td>Манетки</td>
            <td>триггерные однорычажные, Shimano</td>
          </tr>
          <tr className="title transmission">
            <th colSpan={2}>характеристика трансмиссии</th>
          </tr>
          <tr className="content">
            <td>Количество скоростей</td>
            <td>7</td>
          </tr>
          <tr className="content">
            <td>Педали</td>
            <td>классические</td>
          </tr>
          <tr className="content">
            <td>Передний переключатель</td>
            <td>1 звезда</td>
          </tr>
          <tr className="content">
            <td>Задний переключатель</td>
            <td>Shimano Tourney (прогулочный)</td>
          </tr>
          <tr className="content">
            <td>Кассета</td>
            <td>7 звезд</td>
          </tr>
          <tr className="title brakes">
            <th colSpan={2}>тормоза</th>
          </tr>
          <tr className="content">
            <td>Передний</td>
            <td>дисковый механический</td>
          </tr>
          <tr className="content">
            <td>Задний</td>
            <td>дисковый механический</td>
          </tr>
          <tr className="content">
            <td>Готовность к установке дисковых</td>
            <td>рама, вилка, втулка </td>
          </tr>
          <tr className="title other">
            <th colSpan={2}>прочее</th>
          </tr>
          <tr className="content">
            <td>Оснащение</td>
            <td>электрооборудование, звонок</td>
          </tr>
          <tr className="content">
            <td>Вес</td>
            <td>25 кг</td>
          </tr>
        </tbody>
      </table>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </Styled>
  )
}