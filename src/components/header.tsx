import { FC } from 'react';
import styled from 'styled-components';
import logo from '../BLL/images/logo.jpg'
import { Container } from './templates/container';

const Styled = styled.header`
position: fixed;
width: 100%;
.wrapper{
  height: 120px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-white);
}
.logo img{
  border-radius: 0 0 var(--borrad) var(--borrad);
}
.menu{
  .menu__list{
    height: 100%;
    text-transform: uppercase;
    display: flex;
    gap: 10px;
    .menu__item{
      height: 100%;
      a{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px;
        border-radius: 0 0 var(--borrad) var(--borrad);
        color: var(--color-black);
        font: 400 16px Inter;
        transition: all 0.1s ease;
        &:hover{
          background-color: var(--color-black);
          color: var(--color-white);
        }
      }
    }
  }
}
`
export const Header: FC = () => {
  return (

    <Styled>
      <Container>
        <div className="wrapper">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav className='menu'>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#">Описание</a>
              </li>
              <li className="menu__item">
                <a href="#">Характеристики</a>
              </li>
              <li className="menu__item">
                <a href="#">стоимость</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </Styled>
  )
}
