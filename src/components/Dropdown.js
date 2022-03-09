import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import instaIcom from '../images/instagramIcon.png'

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    text-align: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity; ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: #fff;
`
const DropdownWrapper = styled.div`

`
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 88px);
    text-align: center;
    margin-bottom: 4rem;
`
const DropdownLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s; ease-in-out;

    &:hover {
        color: #cd853f  ;
    }
`
const BtnWrap = styled.div`

`
const IconInsta = styled.img`
cursor: pointer;
`


const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                     <a href='https://www.instagram.com/brunomozi'><IconInsta src={instaIcom} alt="Icone do instagram"/></a>
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" to="/contact">Contact us</Button>
                </BtnWrap>
            </DropdownWrapper>
            <h1>Hi</h1>
        </DropdownContainer>
    )
}

export default Dropdown
