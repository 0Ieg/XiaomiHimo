import {FC} from 'react';
import styled from 'styled-components';
import { Button } from './templates/button';

const Styled = styled.main`
  
`
export const Main:FC = ()=>{
  return(
    <Styled>
      Main
      <Button backColor='red'>ЗАКАЗАТЬ</Button>
    </Styled>
  )
}