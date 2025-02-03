import React from 'react'
import './About.css'
import logo from '../../assets/logo.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={logo} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>A MERN Stack Developer builds modern web applications using MongoDB, Express.js, React.js, and Node.js, creating dynamic user interfaces and scalable backend systems to enhance user experience.</p>
                <p>A MERN Stack Developer specializes in full-stack web development, handling both frontend and backend technologies to design, develop, and deploy efficient, high-performance applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS </p> <hr style={{width: "50%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p> <hr style={{width: "70%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p> <hr style={{width: "60%"}} />
                </div>
                <div className="about-skill">
                    <p>Node JS </p> <hr style={{width: "50%"}} />
                </div>
                <div className="about-skill">
                    <p>Express JS </p> <hr style={{width: "75%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr /> 
        <div className="about-achievement">
        <h1>10+</h1>
        <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
        <h1>5+</h1>
        <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
