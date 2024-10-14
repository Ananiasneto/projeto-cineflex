
import imgLogo from '../assets/logo-filme.png'
import styled from 'styled-components'


export default function Logo(){
    return (
    <><Topo>
    <Imagem src={imgLogo} alt="logo" />
    <Texto> Cineflex</Texto>
    </Topo>
    </> 
    )
}

const Imagem=styled.img`
    width:40px;
    height: 40px;
    margin-right: 10px;
`
const Texto=styled.h1`
 font-family: "Raleway", sans-serif;
 font-weight: 600;
  font-size: 34px;
  color: #FADBC5;
`
const Topo=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 67px;
    background-color: #EE897F;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
`