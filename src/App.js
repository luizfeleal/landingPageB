import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import FirstPage from './pages/FirstPage';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
    <GlobalStyle />
          <Routes>
            <Route exact path='/' element={<FirstPage />}/>
            <Route exact path='/rockinrio' element={<FirstPage />}/>
          </Routes>
          
    </>
  );
}

export default App;
