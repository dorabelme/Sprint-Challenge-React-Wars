import React from "react";
import styled from 'styled-components';


const CardContent = styled.div`
    width: 800px;
    background: #FFFFFF;
    box-shadow: 1rem 1rem 5rem rgba(30, 49, 78, 0.14);
    margin: 3rem auto;
    padding: 1rem 2rem;
    min-height: 16.5rem;
    border-radius: 10px;
    text-align: center;
    background-color: black;
`;

const Title = styled.h2`
    font-family: 'Russo One', sans-serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: white;
`;

const StyledP = styled.p`
  font-family: 'Russo One', sans-serif;
  font-size: 18px;
  color: white;
`;


function Card(props) {
    const person = props.person;
    console.log(person)
    return (
        <CardContent>
            <Title>{person.name}</Title>
            <StyledP>Birth Year: {person.birth_year}</StyledP>
            <StyledP>Gender: {person.gender}</StyledP>
            <StyledP>Height: {person.height}</StyledP>
            <StyledP>Mass: {person.mass}</StyledP>
            <StyledP>Hair Color: {person.hair_color}</StyledP>
            <StyledP>Skin Color: {person.skin_color}</StyledP>
        </CardContent>
            
    );
};

export default Card;