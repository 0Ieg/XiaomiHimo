import { FC } from "react"
import styled from "styled-components"
import { Slider } from "../templates/slider"
import { Button } from "../templates/button"
import image from '../../BLL/images/price.jpg'
import o1 from '../../BLL/images/01.jpg'
import o2 from '../../BLL/images/02.jpg'
import o3 from '../../BLL/images/03.jpg'

const Styled = styled.section`
margin-top: -120px;
padding-top: 120px;
padding-bottom: 100px;
.wrapper{
  .slider{
    width: 100%;
    max-height: 632px;
  }
  .order{
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .left{
      .title{
        font: 700 18px Inter;
        text-transform: uppercase;
      }
      .text{
        padding: 40px 0 30px 0;
        font: 400 14px Inter;
        max-width: 300px;
      }
      .form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        input{
          max-width: 420px;
          height: 33px;
          border-width: 0 0 2px 0;
          border-color: black;
          font: 400 16px Inter;
          &:focus{
            outline: none;
          }
        }
        .colors{
          font: 400 16px Inter;
          color: var(--color-gray);
          text-transform: lowercase;
          .label{
            padding-bottom: 10px;
          }
          input{
            width: 80px;
            height: 14px;
            border-radius: 30px;
            display: inline-block;
            position: relative;
            cursor: pointer;
            &:not(:last-of-type){
              margin-right: 23px;
            }
            &::after{
              content: '';
              border-radius: 30px;
              position: absolute;
              z-index: 3;
              width: 100%;
              height: 100%;
            }
            &:first-of-type::after{
              background-color: var(--color-gray);
            }
            &:nth-of-type(2)::after{
              background-color: var(--color-white);
              border: 1px solid var(--color-gray);
            }
            &:last-of-type::after{
              background-color: var(--color-red);
            }
          }
        }
      }
    }
  }
  .photo{
    max-width: 603px;
    position: relative;
    .price{
      font: 400 calc(var(--index)*1.2) Inter;
      position: absolute;
      top: calc(var(--index)*2.5);
      left: calc(var(--index)*-3);
      &::after, &::before{
        content: '';
        width: calc(var(--index)*7.6);
        height: calc(var(--index)*3.5);
        border-radius: 50%;
        border: 1px solid var(--color-red);
        position: absolute;
        left: calc(var(--index)*-0.5);
      }
      &::after{
        top: calc(var(--index)*-1.3);
      }
      &::before{
        top: calc(var(--index)*-0.8);
      }
    }
    .img{
      width: 100%;
    }
  }
}
`
export const Price:FC = ()=>{
  const images = [o1,o2,o3]
  return(
    <Styled id="price">
      <div className="container">
        <div className="wrapper">
          <div className="slider">
            <Slider images={images}/>
          </div>
          <div className="order">
            <div className="left">
              <div className="title">Заказать</div>
              <div className="text">Если Вы хотите заказать велосипед, оставьте свой контакт и наш менеджер перезвонит вам в ближайшее время</div>
              <form className="form" action="">
                <input type="text" placeholder="имя" />
                <input type="tel" placeholder="телефон" />
                <div className="colors">
                  <div className="label">выберите желаемый цвет</div>
                  <input type="radio" name="color" id="" value={'gray'}/>
                  <input type="radio" name="color" id="" value={'white'}/>
                  <input type="radio" name="color" id="" value={'red'}/>
                </div>
                <Button>Заказать</Button>
              </form>
            </div>
            <div className="photo">
              <div className="price">32 999 руб.</div>
              <img className='img' src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Styled>
  )
}