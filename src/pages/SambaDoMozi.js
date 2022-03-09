import React, { useState } from 'react';
import '../App.css';
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar';
import GlobalStyle from '../globalStyles';
import Footer from '../components/Footer';
import { FooterData } from '../data/FooterData';
import Gallery from '../components/Gallery2';
import { SambaDoMoziData } from '../data/SambaDoMoziData';
import { RockInRio } from '../data/RockInRioData';
import Cards from '../components/Cards';
import SlideImages from '../components/SlideImage';
import { SlideRockInRioData } from '../data/SlideRockInRioData';
import { SambaDoMoziFirstVideo } from '../data/SambaDoMoziFIrstVideo';
import { SlideSambaDoMoziData } from '../data/SlideSambaDoMoziData';


  function SambaDoMozi() {
  

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
      <>
        <GlobalStyle />
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Gallery gallery={SambaDoMoziFirstVideo}/>
        <Cards gallery={SambaDoMoziData}/>
        <SlideImages slides={SlideSambaDoMoziData} /> 
        <Footer {...FooterData}/>
      </>
    );
  }
  
  export default SambaDoMozi;