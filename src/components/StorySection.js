import React, { useEffect } from 'react';
import styled from 'styled-components';
import {SiMinutemailer} from 'react-icons/si';

const Section = styled.section`
width:; 100%;
height: 100%;


h1{
  color: white;
}
`
const Container = styled.div`

display: flex;
justify-content: center;

@media screen and (max-width: 768px) {
     
}
`


const Grid = styled.div`
  color: white;
  text-align: center;
`

const Img = styled.img`
position: relative;
top: -120px;
right: 70px;
z-index: 1;
width: 20vw;
height: 65vh;
@media screen and (max-width: 1740px) {
    width: 20vw;
  height: 65vh;
}
@media screen and (max-width: 1439px) {
  width: 25vw;
  height: 65vh;
}
@media screen and (max-width: 1250px) {
  width: 30vw;
  height: 65vh;
}
@media screen and (max-width: 1050px) {
  width: 35vw;
  height: 65vh;
}

@media screen and (max-width: 820px) {
  width: 45vw;
  height: 60vh;
}
@media screen and (max-width: 769px) {
    width: 40vw;
  height: 60vh;
}
@media screen and (max-width: 641px) {
    width: 40vw;
  height: 70vh;
}
@media screen and (max-width: 530px) {
    width: 60vw;
  height: 70vh;
}
@media screen and (max-width: 415px) {
    width: 65vw;
  height: 60vh;
}

@media screen and (max-width: 390px) {
    width: 64vw;
  height: 55vh;
}
@media screen and (max-width: 376px) {
  width: 64vw;
  height: 65vh;
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
  left: 395px;
  background: transparent;
  border: none;
  font-size: 25px;
  z-index: 1;
`
const Text = styled.div`

`

const Video = styled.video`
  position: absolute;
  
  

  @media screen and (max-width: 1840px) {
    top: 5px;
    left: 140px;
    width: 310px;
    height: 610px;
}


@media screen and (max-width: 1720px) {
  top: 0px;
left: px;
width: 289px;
height: 610px;
}
@media screen and (max-width: 1440px) {
  top: 5px;
  left: 140px;
width: 289px;
height: 610px;
}
  @media screen and (max-width: 1024px) {
    top: 5px;
  left: 140px;
  width: 289px;
  height: 610px;
  }

  @media screen and (max-width: 820px) {
    top: 55px;
  left: 80px;
  width: 439px;
  height: 620px;
  }

  @media screen and (max-width: 769px) {
    top: -10px;
  left: 118px;
  width: 39vw;
  height: 65vh;
}

  @media screen and (max-width: 415px) {
    top: 15px;
  left: 120px;
  width: 60vw;
  height: 60vh;
  }
  @media screen and (max-width: 390px) {
    top: -5px;
    left: 120px;
    width: 60vw;
    height: 60vh;
}
  @media screen and (max-width: 376px) {
    top: 38px;
    left: 120px;
    width: 60vw;
    height: 60vh;
}

  
}
}
`
const InputComent = styled.input`
  position: absolute;
  top: 520px;
  left: 165px;
  width: 220px;
  height: 35px;
  background: transparent;
  border: 0.5px solid white;
  border-radius: 50px;
  z-index: 1;
  color: white;
`

const Div = styled.div`
  
`
const DivImg = styled.div`
  padding-left: 180px;
  padding-top: 137px;
`



const StorySection = ({images}) => { //heading, image, imageTwo, reverse

  useEffect(() => {
    const video =  document.getElementById("video");
    if(video) {
      video.onEnded = (e) => {
        console.log('video terminou')
      }
    }
  
  })
var i = 1

  //console.log(document.getElementById('container').getBoundingClientRect());
  
  function videoPause(){
    
    document.getElementById('video').play()
  }

  return (
      
        <Section id='stories'>
        <Container id='container'>
            <Grid >
              <h1>Momentos Inesquecíveis</h1>
              <p>Clique na tela para dar play no video ;)</p>
                <ImgTv>
                  <DivImg><Img src={images[0].imageTwo}onClick={videoPause} alt="Storys dos shows"/></DivImg>
                  <Div><Video autoPlay id='video' onEnded={()=>{
                    i = i + 1
                    document.getElementById('video').src = `${images[i].image}`
                    if(i === (images.length - 1)){
                      document.getElementById('video').src = `${images[i].image}`
                      i = 0
                    }
                  }}>
                    <source src={images[i].image} type="video/mp4" alt="Storys dos shows"/>
                  </Video></Div>
                  
                </ImgTv>
                
            </Grid>
        </Container>
    </Section>
    )

    // <InputComent type="text" placeholder='Escreva seu comentário'/>
    //<ButtonSender type='button'><Sender /></ButtonSender>
    
}

export default StorySection

