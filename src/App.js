import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import FirstPage from './pages/FirstPage';
import GlobalStyle from './globalStyles';
import FestaCorporativa from './pages/FestaCorporativa';
import RockInRio from './pages/RockInRio';
import SambaDoMozi from './pages/SambaDoMozi';
import Casamento from './pages/Casamento';

function App() {
  return (
    <>
    <GlobalStyle />
          <Routes>
            <Route exact path='/' element={<FirstPage />}/>
            <Route exact path='/casamento' element={<Casamento />}/>
            <Route exact path='/rockInRio' element={<RockInRio />}/>
            <Route exact path='/sambaDoMozi' element={<SambaDoMozi />}/>
          </Routes>
          
    </>
  );
}

export default App;
