import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import StorySection from './components/StorySection';
import { InfoData } from './data/infoData';
import { StoryData } from './data/StoryData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import Footer from './components/Footer';
import { FooterData } from './data/FooterData';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <StorySection {...StoryData}/>
      <Footer {...FooterData}/>
    </>
  );
}

export default App;
