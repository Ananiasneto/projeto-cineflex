
import { useState ,useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; 


export default function Sessao() {
    const [sessoesFilme,setSessoesFilme] =useState([]);
    const[idSessao,setIdSessao]=useState();
    const { idFilme } = useParams()
    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promisse.then((response)=>setSessoesFilme(response.data));
        promisse.catch((err)=>console.log(err));
        },[]);
        if (sessoesFilme.length === 0) {
            return <TextoCarregamento>Carregando ...</TextoCarregamento>;
        }
        return (
        <>
            <Texto>Selecione o horário</Texto>
            <Sessoes>
                {sessoesFilme.days.map((sessao) => (
                    <SessaoFilmeEscolhido key={sessao.id}>
                        <TextoSessao>{sessao.weekday},{sessao.date}</TextoSessao>
                        <LinhaHorizontal></LinhaHorizontal>
                       <Hora>
                        {sessao.showtimes.map((horario)=>(
                                <LinkStyled key={horario.id} to={`/assentos/${horario.id}`} onClick={() => setIdSessao(horario.id)} >
                               <HorarioDisponivel>{horario.name}</HorarioDisponivel> 
                               </LinkStyled>
                            
                        ))}
                        </Hora>
                    </SessaoFilmeEscolhido>
                ))}
            </Sessoes>
        </>
    );
}

const Sessoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #FFFFFF;
`;


const SessaoFilmeEscolhido = styled.div`
    width: 90%;
    background-color: #2B2D36;
    border-radius: 8px;
    border: 1px solid #2B2D36;
   margin-bottom: 23px;
`;
const Hora = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 5%;
`;
const HorarioDisponivel = styled.h1`
font-family: "Sarala", sans-serif;
font-weight: 400;
border: 2px #EE897F solid;
color:#EE897F;
border-radius: 4px;
width: 84px;
height: 41px;
font-size: 16px;
margin-right: 5px;
display: flex;
align-items: center;
justify-content: center;


`;

const LinhaHorizontal = styled.hr`
    width: 90%;                  
    border: 1px solid #4E5A65;
    margin: 0px auto; 
    display: flex;
    justify-content: center;
`;
const TextoSessao = styled.h1`
font-family: "Sarala", sans-serif;
font-weight: 400;
margin-left:5%;
color: #FFFFFF;
font-size: 20px;
`;

const TextoCarregamento=styled.h1`
 font-family: "Sarala", sans-serif;
 font-weight: 700;
  padding-top: 70px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 40px;
  font-weight: 400px;
  color: #EE897F;
`

const LinkStyled = styled(Link)`
    text-decoration: none; 
    color: inherit;
`;