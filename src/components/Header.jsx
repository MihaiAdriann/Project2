import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/images/LogoSite.png';
import {ReactComponent as Cart} from '../assets/icons/shopping_cart_black_24dp.svg'

function Header() {
  return (
    <div className='header d-flex justify-content-between align-items-center container'>
      <Link className="link" to="/"><img src={logo} alt="logo" /></Link>
      <Link className="link" to="/about">About Us</Link>
      <Link className="link" to="/terms">Terms&Conditions</Link>
      <div>
      <Link className="link" to="/login">Login</Link>
      <Cart/>
      </div>
     
    </div>
  )
}

export default Header
