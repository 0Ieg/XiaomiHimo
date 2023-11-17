import { FC, useState } from "react";
import styled from "styled-components";


const Styled = styled.div`
width: 100%;
border-radius: var(--borrad);
overflow: hidden;
.window{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .slides{
    display: flex;
    .slide{
      min-width: 100%;
    }
  }
  .buttons{
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .buttonWrapper{
      padding: 0 10px;
      height: 25px;
      cursor: pointer;
      &:hover{
        background: radial-gradient(rgba(255, 64, 64, 0.40),rgba(255, 64, 64, 0.1), rgba(255, 64, 64, 0));
        border-radius: 7px;
      }
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

export const Slider:FC<{images:any[]}> = (props)=>{
  const { images } = props
  const [currentSlide, setCurrentSlide] = useState(0)
  const clickHandler = (event:any)=>{
    setCurrentSlide(event.target.id)
  }
  const Slides = images.map((image, id)=><img src={image} alt="" key={id} className="slide"/>)
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
        <div className="buttons" >
          {Buttons}
        </div>
      </div>
    </Styled>
  )
}