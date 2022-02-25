import React, { useState } from 'react';
import '../App.css';
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar';
import GlobalStyle from '../globalStyles';
import Footer from '../components/Footer';
import { FooterData } from '../data/FooterData';
import Gallery from '../components/Gallery';
import { SambaDoMoziData } from '../data/SambaDoMoziData';


function Casamento() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
      <>
          <GlobalStyle />
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Gallery gallery={SambaDoMoziData}/>
        <Footer {...FooterData}/>
      </>
    );
  }
  
  export default Casamento;