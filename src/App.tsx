import {FC} from 'react';
import styled from 'styled-components';
import './App.css'
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

const Styled = styled.div`
  
`
export const App:FC = ()=>{
  return(
    <Styled>
      <Header/>
      <Main/>
      <Footer/>
    </Styled>
  )
}
