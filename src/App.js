import React from 'react';
import './App.css';
import {Router, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Terms from './pages/Terms';
import Login from './pages/Login';
class App extends React.Component{
  constructor(){
    super();
    this.setState = {}
  }

render(){
  return(
    <div>
       <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
     
    </div>

  )
}





}
export default App;
