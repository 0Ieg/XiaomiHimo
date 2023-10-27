import {FC, ReactNode} from 'react';
import styled from 'styled-components';

const Styled = styled.button`
width: 420px;
height: 80px;
font: 400 20px serif;
letter-spacing: 22px;
color: var(--color-white); 
cursor: pointer;
border: none;
border-radius: var(--borrad);
background-color: var(--color-black);
transition: all 0.1s ease;
&:hover{
  background-color: var(--color-red);
}
`
type PT = {children:ReactNode}
export const Button:FC<PT> = (props)=>{
  const {children} = props
  return(
    <Styled>
      {children}
    </Styled>
  )
}