import React from 'react';
import './App.css';
import { Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import './utils/utility-classes.css';
import {auth} from 'firebase/app'
// Importam si pagina de produs.
import Product from './pages/Product';
class App extends React.Component{
  constructor(){
    super();
    this.setState = {}
  }

render(){
  return(
    <div className="app">
    
       <Routes>
       <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/about" component={About}/>
        <Route path="/category/:categoryName" component={Category}/>
        {/* Instantiem ruta pentru pagina de produs */}
        <Route path="/product/:productId" component={Product}/>
        <Route path="*" component={Page404}/>
        </Routes>

     
    </div>

  )
}





}
export default App;
