import { FC } from "react"
import styled from "styled-components"
import { Slider } from "../templates/slider"
import { Button } from "../templates/button"
import image from '../../BLL/images/price.jpg'

const Styled = styled.section`
/* margin-top: -120px;
padding-top: 120px; */
.wrapper{
  .order{
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
  return(
    <Styled id="price">
      <div className="container">
        <div className="wrapper">
          <Slider/>
          <div className="order">
            <div className="title">Заказать</div>
            <div className="text">Если Вы хотите заказать велосипед, оставьте свой контакт и наш менеджер перезвонит вам в ближайшее время</div>
            <form className="form" action="">
              <input type="text" placeholder="имя"/>
              <input type="tel" placeholder="телефон"/>
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
    </Styled>
  )
}