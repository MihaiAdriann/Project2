import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Terms from './pages/Terms';

class App extends React.Component{
  constructor(){
    super();
    this.setState = {}
  }

render(){
  return(
    <div>
      Hello World!
      <Home/>
      <br/>
      <About/>
      <br/>
      <Terms/>
    </div>

  )
}





}
export default App;
