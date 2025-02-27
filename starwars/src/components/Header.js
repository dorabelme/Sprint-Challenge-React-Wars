import React from "react";
import ButtonExampleShorthand from "./Button";
import styled from 'styled-components';

const HeaderDiv = styled.div`
    margin: 3rem auto;
    text-align: center;
`;

const MainTitle = styled.h1`
    font-family: 'Russo One', sans-serif;
    font-size: 4rem;
`;


function Header(props) {
    return (
        <HeaderDiv>
            <MainTitle className="Header">React Wars</MainTitle>
            <ButtonExampleShorthand onClick={props.visitPrevious} content="Previous"></ButtonExampleShorthand>
            <ButtonExampleShorthand onClick={props.visitNext} content="Next"></ButtonExampleShorthand>
        </HeaderDiv >
    )
};

export default Header;
