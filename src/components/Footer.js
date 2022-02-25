import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 30vh;
    background-color: black;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    text-align: center;
`

const Icon = styled.img`
cursor: pointer;
padding-top: 20px;
`

const Footer = ({text, image}) => {
    return (
        <FooterContainer>
            <Content>
                <p>{text}</p>
                <a href='https://www.instagram.com/brunomozi'><Icon src={image} alt="Icone do instagram"/></a>
            </Content>
        </FooterContainer>
    )
}

export default Footer
