import { FC, useState } from "react";
import styled from "styled-components";
import b1 from '../../BLL/images/b1.jpg'
import b2 from '../../BLL/images/b2.jpg'
import b3 from '../../BLL/images/b3.jpg'
import b4 from '../../BLL/images/b4.jpg'
import b5 from '../../BLL/images/b5.jpg'

const Styled = styled.div`
width: 100%;
.window{
  max-width: 630px;
  overflow: hidden;
  position: relative;
  .slides{
    display: flex;
  }
  .buttons{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .buttonWrapper{
      padding: 0 10px;
      height: 25px;
      cursor: pointer;
      .button{
        width: 6px;
        height: 100%;
        border: 0;
        border-radius: 7px;
        background-color: var(--color-black);
        transition: all 0.1s ease;
        pointer-events: none;
        &.active{
          background-color: var(--color-red);
        }
      }
    }
  }
}

`

export const Slider:FC = ()=>{
  const [currentSlide, setCurrentSlide] = useState(0)
  const clickHandler = (event:any)=>{
    setCurrentSlide(event.target.id)
  }
  const images = [b1,b2,b3,b4,b5]
  const Slides = images.map((image, id)=><img src={image} alt="" key={id}/>)
  const Buttons = images.map((image,index)=>{
    return(
      <div className="buttonWrapper" onClick={clickHandler} id={index.toString()} key={index}>
        <button className={index==currentSlide?"button active":"button"}></button>
      </div>
    )
})
  return(
    <Styled>
      <div className="window">
        <div className="slides" style={{transform:`translateX(-${100*currentSlide}%)`}}>
          {Slides}
        </div>
        <div className="buttons">
          {Buttons}
        </div>
      </div>
    </Styled>
  )
}