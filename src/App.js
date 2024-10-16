import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maincon from './components/MainContent';
import Login from './Pages/Login';

import './App.css';
import SinglePage from './Pages/SinglePage';
import Error from './Pages/Error';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Maincon />} />
          <Route path='/Loginp' element={<Login />} />
          <Route path='/myImage' element={<SinglePage />} />
          <Route path='*' element={<Error/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
