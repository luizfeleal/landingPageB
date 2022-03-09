import React from 'react'
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { HashLink as Direcionador } from 'react-router-hash-link';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
import instaIcom from '../images/instagramIcon.png'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    width: 100%;
    position: fixed;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Direcionador)`
    ${NavLink};
`

const MenuBars = styled(FaBars)`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
        width: 50px;
        height: 25px;
        color: #fff;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-itens: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavMenuLinks = styled(Direcionador)`
    ${NavLink};
    color: #fff;
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Icon = styled.img`
cursor: pointer;
`

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo smooth to='/#home'>Bruno Mozi</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks smooth to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
                 <a href='https://www.instagram.com/brunomozi'><Icon src={instaIcom} alt="Icone do instagram"/></a>
            </NavMenu>
            <NavBtn>
                <Button to="" primary="true" ><a href='https://api.whatsapp.com/send/?phone=5521964370776&text&app_absent=0'>Entre em contato</a></Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar
