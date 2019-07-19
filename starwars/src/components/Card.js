import React from "react";
import styled from 'styled-components';

const CardContent = styled.div`
    width: 1000px;
    background: #FFFFFF;
    box-shadow: 1rem 1rem 5rem rgba(30, 49, 78, 0.14);
    margin: 3rem auto;
    padding: 3rem 2rem;
    min-height: 16.5rem;
    border-radius: 20px;
`;

// const TextP = styled.p`
//     font-family: 'Darker Grotesque', sans-serif;
//     font-size: 18px;
//     margin-bottom: 4rem;
// `;

const Title = styled.h2`
    font-family: 'Russo One', sans-serif;
    font-size: 1.8rem;
`;

const StyledP = styled.p`
  font-family: 'Russo One', sans-serif;
`;


function Card(props) {
    const person = props.person;
    console.log(person)
    return (
        <CardContent>
            <Title>{person.name}</Title>
            <StyledP>{person.birth_year}</StyledP>
            <StyledP>{person.gender}</StyledP>
            <StyledP>{person.height}</StyledP>
            <StyledP>{person.mass}</StyledP>
            <StyledP>{person.hair_color}</StyledP>
            <StyledP>{person.skin_color}</StyledP>
        </CardContent> 
    );
};

export default Card;