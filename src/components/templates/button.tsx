import {FC, ReactNode} from 'react';
import styled from 'styled-components';

const Styled = styled.button`
width: 420px;
height: 80px;
font: 400 20px serif;
color: var(--color-white); 
cursor: pointer;
&.black{
  background-color: var(--color-black);
}
&.red{
  background-color: var(--color-red);
}
`
type PT = {backColor:'black'|'red', children:ReactNode}
export const Button:FC<PT> = (props)=>{
  const {backColor, children} = props
  return(
    <Styled className={backColor==='black'?'black':'red'}>
      {children}
    </Styled>
  )
}