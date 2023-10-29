import {FC} from 'react';
import styled from 'styled-components';
import { Button } from './templates/button';
import { Container } from './templates/container';

const Styled = styled.section`
height: 100dvh;
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
.description{
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
      <div className="bike"></div>
    </Styled>
  )
}