import {FC} from 'react';
import styled from 'styled-components';
import { Button } from './templates/button';
import { Slider } from './templates/slider';

const Styled = styled.section`
height: 100dvh;
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
.description{
  min-height: 585px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .title{
    font: 900 64px Inter;
  }
  .subtitle{
    font: 400 32px Inter;
    color: var(--color-gray);
  }
  .text{
    font: 400 14px Inter;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 70px 0;
  }
}
.characteristics{
  width: 100%;
  tr{
    text-align: center;
    th{
      font: 700 16px Inter;
      text-transform: uppercase;
    }
    td{
      font: 400 14px Inter;
      text-transform: lowercase;
    }
  }
}
`
export const StartPage: FC = () => {
  return (
    <Styled id=''>
      <div className="description">
        <h1 className="title">Xiaomi Himo C26</h1>
        <h2 className="subtitle">Электрический велосипед</h2>
        <div className="text">
          <span>Полная свобода передвижения и надежный транспорт для путешествий на любые расстояния</span>
          <span>HIMO C26 – это новый электровелосипед от Xiaomi, который создан как для езды по городу, так и бездорожью. Он имеет мощный двигатель и емкий аккумулятор, благодаря которым способен проезжать на одном заряде до 100 км, что определенно выше, чем у большинства конкурентов. А большие колеса с пневматическими шинами, дисковые тормоза, 7-скоростная трансмиссия и эргономичное сидение делают каждую поездку гораздо приятнее.</span>
        </div>
        <Button>Заказать</Button>
      </div>
      <div className="bike">
        <Slider/>
        <table className="characteristics">
          <thead className='thead'>
            <tr>
              <th>до 100 км</th>
              <th>25 км/ч</th>
              <th>3 режима езды</th>
              <th>25 кг</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            <tr>
              <td>Запас хода</td>
              <td>Макс корость</td>
              <td>механический, гибридный,<br/>электрический</td>
              <td>вес</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Styled>
  )
}