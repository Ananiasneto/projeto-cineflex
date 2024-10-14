
import Logo from './components/Logo'
import EmCartaz from './components/EmCartaz'
import Sessao from './components/Sessao'
import styled from 'styled-components'
import Assentos from './components/Assentos'
import Finalizar from './components/Finalizar'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Principal>
        <Logo/>
        <Routes>
          <Route path='/' element={<EmCartaz/>}/>
          <Route path='/sessoes/:idFilme' element={<Sessao/> }/>
          <Route path='/assentos/:idSessao' element={<Assentos/>}/> 
          <Route path='/sucesso' element={<Finalizar/>}/>

        </Routes>
        
      
    </Principal>
    </BrowserRouter>
  )
}
const Principal=styled.div`
box-sizing: border-box;
background-color: #212226;
background-size: cover; 
width: 100vw;
min-height: 100vh;


`
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100%; 
  }
`;



 