import {FC} from 'react';
import styled from 'styled-components';
import { StartPage } from './startPage';
import { Container } from './templates/container';
import { Description } from './description';
import { Characteristics } from './main/characteristics';
import { Price } from './main/price';

const Styled = styled.main`
  
`
export const Main: FC = () => {
  return (
    <Container>
      <Styled>
        <StartPage />
        <Description/>
        <Characteristics/>
        <Price/>
      </Styled>
    </Container>
  )
}