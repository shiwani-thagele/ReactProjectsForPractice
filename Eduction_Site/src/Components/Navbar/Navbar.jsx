import React from 'react'
import './Navbar.css'
import  logo from ''

const Navbar = () => {
  return (
    <nav>
        <img src="{logo}" alt="" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
          </ul>
    </nav>
  )
}

export default Navbar