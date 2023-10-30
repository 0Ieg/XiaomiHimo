import { FC } from "react";
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
  .slides{
    display: flex;
  }
}

`

export const Slider:FC = ()=>{
  const images = [b1,b2,b3,b4,b5]
  const All = images.map((image, id)=><img src={image} alt="" key={id}/>)
  return(
    <Styled>
      <div className="window">
        <div className="slides">
          {All}
        </div>
      </div>
    </Styled>
  )
}