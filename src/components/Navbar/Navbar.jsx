import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-letter-s-logo-png-png-image_5685888.png" alt="" />
   <ul className="nav-menu">
    <li>Home</li>
    <li>About Me</li>
    <li>Services</li>
    <li>Portfolio</li>
    <li>Contact</li>
   </ul>
   <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
