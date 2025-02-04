import React from 'react'
import './Services.css'
import logo from '../../assets/logo.png'
import Services_Data from '../../assets/services_data'
import arrow from '../../assets/arrow.png'

const Services = () => {
  return (
    <div className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={logo} alt="" />
      </div>
      <div className="services-container">
    {Services_Data.map((service, index) =>{
        return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow} alt="" />
            </div>
        </div>
        
    })}
      </div>
    </div>
  )
}

export default Services
