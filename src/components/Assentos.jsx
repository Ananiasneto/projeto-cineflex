import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

export default function Assentos() {
    const [assentos, setAssentos] = useState([]);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [filme, setFilme] = useState('');
    const [hora, setHora] = useState('');
    const [data, setData] = useState('');
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);
    const [assentosSelecionadosName, setAssentosSelecionadosName] = useState([]);
    const { idSessao } = useParams();
    const navigate=useNavigate();
    
    

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        
        promisse.then(response => {
            setAssentos(response.data.seats);
            setFilme(response.data.movie.title);
            setHora(response.data.name);
            setData(response.data.day.date);
            
        }).catch(err => {
            console.log(err);
        });
    }, [idSessao]);

    if (assentos.length === 0) {
        return <TextoCarregamento>Carregando ...</TextoCarregamento>;
    }

    const toggleAssento = (id,nome) => {
        setAssentosSelecionados((array) => 
            array.includes(id) 
                ? array.filter(assento => assento !== id) 
                : [...array, id]
        );
        setAssentosSelecionadosName((array) => 
            array.includes(nome) 
                ? array.filter(assento => assento !== nome) 
                : [...array, nome]
        );
    };

    function meuSubmit(event){
        event.preventDefault();
        const body={
            ids:assentosSelecionados,
            name:nome,
            cpf:cpf
        }
       axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",body)
        .then(()=>{
             const info = {
                filme: filme,
                nome: nome,   
                cpf: cpf, 
                assentosSelecionados: assentosSelecionadosName ,
                hora:hora,
                data:data
            };
            
            navigate('/sucesso', { state: info });
        })
        .catch(err=>{console.log(err.response.data)})
    
    };

    function checaAssento(assento) {
        if (assento.isAvailable) {
            toggleAssento(assento.id,assento.name);
        } else {
            alert("Assento não disponível");
        }
    }

    return (
        <>
            <Texto>Selecione o(s) assento(s)</Texto>
            <TodosAssentos>
                {assentos.map((assento) => (
                    <Assento 
                        key={assento.id} 
                        onClick={() => checaAssento(assento)}
                        selecionado={assentosSelecionados.includes(assento.id)} 
                        isAvailable={assento.isAvailable}  
                    >
                        <NumeroAssento $selecionado={assentosSelecionados.includes(assento.id)}>
                            {assento.name}
                        </NumeroAssento>
                    </Assento>
                ))}
            </TodosAssentos>
            <LinhaHorizontal />
            <Dados onSubmit={meuSubmit}>
                <Label htmlFor="nome">Nome do comprador(a)</Label>
                <Input 
                    id='nome' 
                    name='nome' 
                    type="text" 
                    value={nome} 
                    onChange={e => setNome(e.target.value)} 
                    placeholder="Digite seu nome..." 
                    required 
                />
                <Label htmlFor="cpf">CPF do comprador(a)</Label>
                <Input 
                    id='cpf' 
                    name='cpf' 
                    type="text" 
                    value={cpf} 
                    onChange={e => setCpf(e.target.value)} 
                    placeholder="Digite seu CPF..." 
                    required 
                />
                <InputSubmit type="submit" value='Reservar assento(s)' /> 
            </Dados>
        </>
    );
}

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
const NumeroAssento = styled.h1`

 font-size: 11px;
 display: flex;
 align-items: center;
 justify-content: center;
cursor:pointer;

`;
const Assento = styled.div`
    display: inline-block; 
    height: 26px;
    width: 26px;
    border-radius: 12px;
    margin: 0% 2% 3% 0%;
    border: 2px solid ${({ selecionado }) => (selecionado ? '#EE897F' : '')}; 
    background-color: ${({ isAvailable, selecionado }) => 
        !isAvailable ? '#2B2D36' : 
        selecionado ? '#FADBC5' : '#9DB899'}; 
    color: #2B2D36;
`;

const TodosAssentos=styled.div`
    width: 90%;
    border-radius: 8px;
    margin-left: 5%;

`
const LinhaHorizontal = styled.hr`
    width: 90%;                  
    border: 1px solid #4E5A65;
    margin-top: 10px;
    `;
const Dados = styled.form`

    display: flex;
    flex-direction: column;
    width: 90%;
    border-radius: 8px;
    margin-left: 5%;
    margin-top: 13px;
`;

const Input = styled.input`
    font-family: "Sarala", sans-serif;
    font-weight: 400;
    font-style: italic;
    color: black;
    border-radius: 8px;
    height: 40px;
    margin-bottom: 10px;
`;
const Label = styled.label`
    font-family: "Sarala", sans-serif;
    font-weight: 400;
    color:  #ffffff;
    padding-top: 11px;
        
`;
const InputSubmit = styled.input`
    font-family: "Sarala", sans-serif;
    font-weight: 400;
    margin-top:10px;
    background-color: #EE897F;
    border-radius: 8px;
    height: 40px;
    color:black;
    font-size: 18px;
    font-weight: 700;
    
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