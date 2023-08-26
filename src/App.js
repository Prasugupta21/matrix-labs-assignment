
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Token from './pages/Token';
import Pair from './pages/Pair';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={  <Token/>} />
        <Route path='/pair'  element={  <Pair/>} />
      </Routes>
   
    </div>
  );
}

export default App;
