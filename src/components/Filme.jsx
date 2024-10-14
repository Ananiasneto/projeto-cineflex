import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Filme({ image, descricao ,idFilme}) {
    return (
            <>
            <LinkStyled to={`/sessoes/${idFilme}`}><FilmeImage src={image} alt={descricao} /></LinkStyled>
            </>  
    );
}

const FilmeImage = styled.img`
cursor: pointer;
    height: 210px;
    width: 145px;
    border-radius: 8px;
    margin-bottom: 20px;
`;
const LinkStyled = styled(Link)`
    text-decoration: none; 
    color: inherit;
`;

