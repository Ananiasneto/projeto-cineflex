import styled from 'styled-components'
import Filme from './Filme';
import axios from 'axios';
import { useEffect, useState } from 'react';




export default function EmCartaz(){
    const [imagem, setImagem] = useState(null);
    useEffect(()=>{
    const promisse = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
    promisse.then((response)=>setImagem(response.data));
    promisse.catch((err)=>console.log(err));
    },[]);
    if(imagem ===null ){
        return <TextoCarregamento>Carregando ...</ TextoCarregamento>
    }
    

    return (
    <>
    <Texto>Em Cartaz</Texto>

    <Filmes>
        {imagem.map((filme, index) => (
            <div key={index}>
                <Filme image={filme.
posterURL} descricao={filme.
    title} idFilme={filme.id}/>
            </div>
        ))}
    </Filmes>

    </> 
    )
}

const Texto=styled.h1`
font-family: "Sarala", sans-serif;
font-weight: 400;
  padding-top: 70px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 24px;
  font-weight: 400px;
  color: #FFFFFF;
`
const Filmes=styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
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