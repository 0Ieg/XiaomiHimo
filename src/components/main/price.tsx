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
        .colors{
          font: 400 14px Inter;
          color: var(--color-gray);
          text-transform: lowercase;
          .label{
            padding-bottom: 10px;
          }
        }
      }

    }
  }
  .photo{
    max-width: 603px;
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
                  <input type="radio" name="color" id="" />
                  <input type="radio" name="color" id="" />
                  <input type="radio" name="color" id="" />
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