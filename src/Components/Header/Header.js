import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="" className='Logo' />

        <ul className="header-menu">
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plane</li>
          <li>Testimonials</li>
          
        </ul>
    </div>
  )
}

export default Header
