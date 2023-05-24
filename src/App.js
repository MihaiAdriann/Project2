import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Terms from './pages/Terms';
import Login from './pages/Login';
import Header from './components/Header';
import Page404 from './pages/Page404';
class App extends React.Component{
  constructor(){
    super();
    this.setState = {}
  }

render(){
  return(
    <div>
      <Header/>
    
       <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/terms' element={<Terms />} />
          <Route  path='/about' element={<About />} />
          <Route path='*' element={<Page404/>} />
        </Routes>

     
    </div>

  )
}





}
export default App;
