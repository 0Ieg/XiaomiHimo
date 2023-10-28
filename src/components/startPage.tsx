import {FC} from 'react';
import styled from 'styled-components';
import { Button } from './templates/button';

const Styled = styled.section`
.description{
  .title{
    font: 900 64px Inter;
  }
  .subtitle{
    font: 400 32px Inter;
    color: var(--color-gray);
  }
}
`
export const StartPage: FC = () => {
  return (
    <div className="container">
      <Styled id=''>
        <div className="description">
          <h1 className="title">Xiaomi Himo C26</h1>
          <h2 className="subtitle">Электрический велосипед</h2>
        </div>
        <div className="bike"></div>
        <Button>ЗАКАЗАТЬ</Button>
      </Styled>
    </div>
  )
}