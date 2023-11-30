import { FC } from "react"
import styled from "styled-components"
import { Slider } from "../templates/slider"
import image from '../../BLL/images/price.jpg'
import o1 from '../../BLL/images/01.jpg'
import o2 from '../../BLL/images/02.jpg'
import o3 from '../../BLL/images/03.jpg'
import { Form } from "./form"

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
            <Form/>
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