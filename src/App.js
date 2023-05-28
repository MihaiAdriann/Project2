import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Page404 from './pages/Page404';
import Login from './pages/Login';


function App() {
  return (
    <div >


        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/terms' element={<Terms />} />
          <Route  path='/about' element={<About />} />
          <Route path='*' element={<Page404/>} />
        </Routes>

    </div>
  );
}

export default App;
