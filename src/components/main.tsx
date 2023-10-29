import {FC} from 'react';
import styled from 'styled-components';
import { StartPage } from './startPage';
import { Container } from './templates/container';

const Styled = styled.main`
  
`
export const Main: FC = () => {
  return (
    <Container>
      <Styled>
        <StartPage />
      </Styled>
    </Container>
  )
}