import React, { useRef, useState } from 'react'
import "./Navbar.css"
import underline from '../../assets/underline_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {

const [menu, setMenu] = useState("home")
const menuRef = useRef();

const openMenu = ()=>{
  menuRef.current.style.right="0"
}
const closeMenu = ()=>{
  menuRef.current.style.right="-350px"
}

  return (
    <div className='navbar'>
        <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-letter-s-logo-png-png-image_5685888.png" alt="" />
        <i onClick={openMenu} className="nav-open ri-menu-3-fill"></i>
   <ul ref={menuRef} className="nav-menu">
   <i onClick={closeMenu} className=" nav-close ri-close-large-fill"></i>
    <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}alt=""/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline}alt=""/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline}alt=""/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline}alt=""/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}alt=""/>:<></>}</li>
   </ul>
   <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
