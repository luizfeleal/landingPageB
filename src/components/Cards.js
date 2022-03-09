import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";

const Section = styled.section`
width:; 100%;
height: 100%;
padding: 4rem 8rem;
`

const Container = styled.div`

text-align: center;
`
const Content = styled.div`

`

const Title = styled.h1`
    color: white;
    padding-bottom: 20px;
    
`
const FirstTitle = styled.h1`
    color: white;
    padding-bottom: 150px;
    
`
const Image = styled.img`
  top: 30px;
  left: 197px;
  width: 530px;
  height: 360px;
  `
  const Text = styled.div`
    color: white;
`
const BoxContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
padding-bottom: 300px;

p{
    padding-top: 30px;
}
`

const FestaCorpSection = ({ gallery, slides }) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const [current, setCurrent] = useState(0);
    //const length = slides.length;
    return(
        <Section>
            <Container>
                <FirstTitle>{gallery[0].firstTitle}</FirstTitle>
                <Content>
                    <BoxContent data-aos="fade-left">
                    <Image src={gallery[0].image} alt="Storys dos shows"/>
                    <Text>
                        <Title>{gallery[1].title}</Title>
                            <p>{gallery[1].description}</p>
                        </Text>
                            
                    </BoxContent>
                    <BoxContent data-aos="fade-right">
                        <Text>
                        <Title>{gallery[1].title}</Title>
                            <p>{gallery[1].description}</p>
                        </Text>
                        <Image src={gallery[1].image} alt="Storys dos shows"/>
                    </BoxContent>
                    <BoxContent data-aos="fade-left">
                    <Image src={gallery[2].image} alt="Storys dos shows"/>
                    <Text>
                        <Title>{gallery[1].title}</Title>
                            <p>{gallery[1].description}</p>
                        </Text>
                            
                    </BoxContent>

                    
                </Content>
            </Container>
        </Section>
    )
}

export default FestaCorpSection;