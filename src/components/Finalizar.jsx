
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Finalizar(){
    const location = useLocation();
    const { filme, nome, cpf, assentosSelecionados,hora,data } = location.state || {};
    return (
    <>
    <Texto> Pedido finalizado! </Texto>
    <Container>
            <FilmeSessao>
                <Titulo>Filme e sessão</Titulo>
                <LinhaHorizontal></LinhaHorizontal>
                <Descricao>{filme}<br />
                {data} às {hora}</Descricao>
            </FilmeSessao>
             <Ingressos>
             <Titulo>Ingressos</Titulo>
             <LinhaHorizontal></LinhaHorizontal>
   
    {assentosSelecionados.map((nomeAssento, index) => (
        <Descricao key={index}> Assentos: {nomeAssento}</Descricao>
                ))}
            
             </Ingressos>
             <Comprador> 
             <Titulo>Comprador(a)</Titulo>
             <LinhaHorizontal></LinhaHorizontal>
             <Descricao>Nome: {nome} <br /> CPF:{cpf}</Descricao>
             </Comprador>
             
    </Container>
    <LinkStyled  to={`/`}>
    <Finaliza>Voltar para tela inicial</Finaliza></LinkStyled >
    </> 
    )
}

const LinkStyled = styled(Link)`
    text-decoration: none; 
    color: inherit;
`;

const Texto = styled.h1`
font-family: "Sarala", sans-serif;
font-weight: 400;
  padding-top: 70px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  color: #9DB899;
`;
const Titulo = styled.h1`
    font-family: "Sarala", sans-serif;
    font-weight: 700;
   color:#EE897F;
   font-size:22px;
`;


const Descricao = styled.h1`
    font-family: "Sarala", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: white;
    line-height: 32.61px;
`;

const Container = styled.div`
 width: 90%;
border-radius: 8px;
margin-left: 5%;
background-color: #2B2D36;
padding-top: 2%;
padding-bottom: 1%;
`;
const FilmeSessao = styled.div`
    width: 90%;
    border-radius: 8px;
    margin-left: 5%;
`;
const Ingressos = styled.div`
    width: 90%;
    border-radius: 8px;
    margin-left: 5%;
`;
const Comprador = styled.div`
    width: 90%;
    border-radius: 8px;
    margin-left: 5%;
`;
const Finaliza = styled.button`
    font-family: "Sarala", sans-serif;
    font-weight: 700;
    width: 90%;
    border-radius: 8px;
    margin-left: 5%;
    margin-top:10px;
    background-color: #EE897F;
    border-radius: 8px;
    height: 42px;
    color:black;
    font-size: 18px;
    font-weight: 700;
    
`;
const LinhaHorizontal = styled.hr`
    width: 100%;                  
    border: 1px solid #4E5A65;

    margin-top: 10px;

    `;