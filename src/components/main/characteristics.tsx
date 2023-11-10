import { FC } from "react";
import styled from "styled-components";

const Styled = styled.section`
  
`
export const Characteristics:FC = ()=>{
  return(
    <Styled>
      <table className="table">
        <caption className="caption">ХАрактеристики</caption>
        <tbody className="tbody">
          <tr className="title general">
            <th>Общие</th>
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
            <th>амортизация</th>
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
            <th>амортизация</th>
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
            <th>характеристика трансмиссии</th>
          </tr>

        </tbody>
      </table>
    </Styled>
  )
}