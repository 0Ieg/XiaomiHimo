import { FC } from 'react';
import styled from 'styled-components';
import logo from '../BLL/images/logo.jpg'

const Styled = styled.header`
height: 100px;
display: flex;
justify-content: space-between;
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
    <div className="container">
      <Styled>
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
      </Styled>
    </div>
  )
}
