import React from 'react';
import styled from 'styled-components';
import { FriendsData } from '../data/FriendsData';

const Section = styled.section`
width:; 100%;
height: 100%;
padding: 4rem 8rem;
`
const Container = styled.div`

text-align: center;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr; 
}
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 1124px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
    }

`
const BoxImage = styled.div`

    padding-top: 70px;

    img{
        width: 290px;
        height: 400px;
        -webkit-transition: -webkit-transform .5s ease;
        transition: transform .5s ease;
    }
    img:hover{
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
    h1{
        color: white;
        padding-bottom: 40px;
    }
    p{
        color: white;
        padding-top: 25px;
    }
`

const H1 = styled.h1`
    color: white;
`

const FriendsSection = ({ photos }) => {
    return (
    <Section>
        <Container>
            <H1>Amigos e clientes</H1>

            <Content>
                <BoxImage>
                    <h1>Mumuzinho</h1>
                    <img src={photos[0].image} alt="menos e mais" />

                </BoxImage>
                <BoxImage>
                    <H1>Menos é Mais</H1>
                    <img src={photos[1].image} alt="menos e mais" />
                </BoxImage>
                <BoxImage>
                    <H1>Tiago Silva</H1>
                    <img src={photos[2].image} alt="menos e mais" />
                </BoxImage>
                <BoxImage>
                    <H1>Rafael Portugal</H1>
                    <img src={photos[3].image} alt="menos e mais" />
                    <p>"Serviço impecável e de extrema qualidade" - Rafael Portugal</p>
                </BoxImage>
               
            </Content>

        </Container>
    </Section>
    )
}

export default FriendsSection;