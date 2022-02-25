import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SambaDoMoziData } from '../data/SambaDoMoziData';
import Aos from "aos";
import "aos/dist/aos.css";
import { SliderData } from '../data/SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
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
    
`
const Video = styled.video`
  top: 30px;
  left: 197px;
  width: 530px;
  height: 740px;
  `
  const Text = styled.div`
    color: white;
`
const BoxContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;

p{
    padding-top: 30px;
}
`

const PhotosGallery= styled.div`

`

//{imageList.map((image)=> <BoxImage>
//<h1>O samba do mozi é diferenciado</h1>
//<img src={image.image} alt='something here'/>
//</BoxImage>)}
//autoPlay playsInline loop

const FestaCorpSection = ({ gallery, slides }) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    return(
        <Section>
            <Container>
                <Title>Samba do Mozi</Title>
                <Content>
                    <BoxContent data-aos="fade-left">
                        <Video autoPlay playsInline muted loop>
                            <source src={gallery[0].image} type="video/mp4" alt="Storys dos shows"/>
                        </Video>
                        <Text>
                            <Title>{gallery[0].title}</Title>
                            <p>{gallery[0].description}</p>
                        </Text>
                    </BoxContent>
                    <BoxContent data-aos="fade-right">
                        <Text>
                        <Title>{gallery[1].title}</Title>
                            <p>{gallery[1].description}</p>
                        </Text>
                        <Video autoPlay playsInline muted loop>
                            <source src={gallery[1].image} type="video/mp4" alt="Storys dos shows"/>
                        </Video>
                    </BoxContent>
                    <BoxContent data-aos="fade-left">
                        <Video autoPlay playsInline muted loop>
                            <source src={gallery[2].image} type="video/mp4" alt="Storys dos shows"/>
                        </Video>
                        <Text>
                        <Title>{gallery[2].title}</Title>
                            <p>{gallery[2].description}</p>
                        </Text>
                    </BoxContent>

                    <PhotosGallery>
                        <FaArrowAltCircleLeft className='left-arrow'  />
                        <FaArrowAltCircleRight className='right-arrow'  />
                        {SliderData.map((slide, index) => {
                            return (
                                <img src={slide.image} alt="samba ddo mozi" />
                            )
                        })}
                    </PhotosGallery>
                </Content>
            </Container>
        </Section>
    )
}

export default FestaCorpSection;