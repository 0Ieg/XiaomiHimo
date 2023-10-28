import {FC} from 'react';
import styled from 'styled-components';
import { Container } from './templates/container';

const Styled = styled.footer`
height: 100px;
background-color: var(--color-black);
color: var(--color-white);
.wrapper{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .politics a{
    text-decoration: underline;
    font: 400 16px Inter;
  }
  .contacts{
    display: flex;
    flex-direction: column;
    gap: 10px;
    .contact{
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      font: 400 16px Inter;
      .icon{
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background-color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
          fill: var(--color-black);
        }
      }
    }
  }
}

`
export const Footer: FC = () => {
  return (
    <Styled>
      <Container>
        <div className="wrapper">
          <div className="politics">
            <a href="#">Политика конфиденциальности</a>
          </div>
          <div className="networks"></div>
          <div className="contacts">
            <div className="contact phone">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </div>
              <div className="text">+38 050 677 77 77</div>
            </div>
            <div className="contact mail">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
              </div>
              <div className="text">elektrobikeukr@gmail.com</div>
            </div>
          </div>
        </div>
      </Container>
    </Styled>
  )
}