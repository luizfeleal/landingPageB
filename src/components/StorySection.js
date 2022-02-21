import React from 'react';
import styled from 'styled-components';
import {SiMinutemailer} from 'react-icons/si';

const Section = styled.section`
width:; 100%;
height: 100%;
padding: 4rem 8rem;

h1{
  color: white;
}
`
const Container = styled.div`
margin: 0 auto;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr; 
}
`


const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
`

const Img = styled.img`
position: relative;
top: -120px;
right: 70px;
z-index: 1;
height: 100vh;
width: 95vw;
@media screen and (max-width: 1440px) {
    width: 65vw;
  height: 100vh;
}
@media screen and (max-width: 1439px) {
    width: 95vw;
  height: 115vh;
}
@media screen and (max-width: 1439px) {
  width: 95vw;
  height: 115vh;
}
@media screen and (max-width: 768px) {
    width: 10vw;
  height: 105vh;
}
@media screen and (max-width: 641px) {
    width: 130vw;
  height: 100vh;
}
`
const ImgTv = styled.div`
  position: relative;
`

const Sender = styled(SiMinutemailer)`
    margin-left: 0.5rem;
    color: white;
`;

const ButtonSender = styled.button`
  cursor: pointer;
  position: absolute;
  top: 525px;
  left: 495px;
  background: transparent;
  border: none;
  font-size: 25px;
`
const Text = styled.div`

`

const Video = styled.video`
  position: absolute;
  top: 30px;
  left: 197px;
  width: 330px;
  height: 540px;
  @media screen and (max-width: 1440px) {
    top: 5px;
  left: 250px;
  width: 289px;
  height: 610px;
  }
  @media screen and (max-width: 1024px) {
    top: 5px;
  left: 250px;
  width: 289px;
  height: 610px;
  }
}
`
const InputComent = styled.input`
  position: absolute;
  top: 520px;
  left: 275px;
  width: 220px;
  height: 35px;
  background: transparent;
  border: 0.5px solid white;
  border-radius: 50px;
  z-index: 1;
  color: white;
`


const StorySection = ({heading, image, imageTwo, reverse}) => {
    return (
        <Section>
        <Container>
            <Grid reverse={reverse}>
                <ImgTv>
                  <Img src={imageTwo} alt="Storys dos shows"/>
                  <Video autoPlay playsInline muted loop>
                    <source src={image} type="video/mp4" alt="Storys dos shows"/>
                  </Video>
                  <InputComent type="text" placeholder='Escreva seu comentário'/>
                  <ButtonSender type='button'><Sender /></ButtonSender>
                </ImgTv>
                <Text>
                  <h1>{heading}</h1>
                </Text>
            </Grid>
        </Container>
    </Section>
    )
}

export default StorySection

