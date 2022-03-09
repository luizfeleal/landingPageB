import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const FirstVideo = styled.div`
width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`
const Section = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`
const Video = styled.video`
`



const Gallery2 = ({gallery}) => {
    return(
        <Section>
            <FirstVideo>
                <Video autoPlay={true}>
                    <source src={gallery[0].video} type="video/mp4" alt="Storys dos shows"/>
                </Video>
            </FirstVideo>
        </Section>
    )
}


export default Gallery2;