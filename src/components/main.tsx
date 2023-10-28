import {FC} from 'react';
import styled from 'styled-components';
import { StartPage } from './startPage';

const Styled = styled.main`
  
`
export const Main: FC = () => {
  return (
    <div className="container">
      <Styled>
        <StartPage/>
      </Styled>
    </div>
  )
}