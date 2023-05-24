import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/about">About Us</Link>
      <Link className="link" to="/terms">Terms&Conditions</Link>

    </div>
  )
}

export default Header
