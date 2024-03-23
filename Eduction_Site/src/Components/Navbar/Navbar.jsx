import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo"
const Navbar = () => {
  return (
    <nav className='container'>
        <img src="{logo}" alt="" className='logo' />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Testimonials</li>
          <li> <button className='btn'>Contact Us</button></li>

          </ul>
    </nav>
  )
}

export default Navbar