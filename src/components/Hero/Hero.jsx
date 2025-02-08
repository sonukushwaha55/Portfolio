import React from "react";
import "./Hero.css";
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
        alt=""
      />
      <h1><span>I'm Sonu Kumar,</span> mern stack developer. </h1>
      <p>I am a MERN Stack Developer passionate about building scalable, high-performance web applications.</p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> </div>     
        <div className="hero-resume">My resume </div>     
           </div>
    </div>
  );
};

export default Hero;
