import styled from 'styled-components';
import React from 'react';
import '../App.css';

const Header = styled.h1`
    background:pink;
    font-size:30px;
`;
const Mass = styled.h2`
    background:green;
    font-size:25px;
`;
const Birth = styled.h3`
    background:dodgerblue;
    font-size:20px;
`;

const TheCard = styled.div`
    width:300px;
    height:300px;
    border-radius:3%;
    background:white;
    margin: 2%0;
    
`;

const Containers = styled.section`
    display:flex;
    justify-content:center
`;






const StarWarsCard = props =>{
    return (
        <Containers>
        <TheCard>
        
            <Header>{props.name}</Header>
            <Mass>Mass:{props.mass}</Mass>
            <Birth>Date Of Birth:{props.birth}</Birth>
        
        </TheCard>
        </Containers>
    )
}

export default StarWarsCard;