import React, { useState } from 'react'
import './Contact.css'
import logo from '../../assets/logo.png'
import 'remixicon/fonts/remixicon.css'



const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8e090dd4-7bdd-4ed1-a4de-5990d5bd4270");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        console.log("Form Submitted:", formData);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message  )
        }
      };
       
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={logo  } alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects.so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <i className="ri-mail-fill"></i>
                    <p>sonukumar1772001@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <i className="ri-phone-fill"></i>
                    <p>(+91) 7352476780</p>
                    </div>
                    <div className="contact-detail">
                    <i className="ri-map-pin-2-fill"></i>
                    <p>Bihar, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'/>
                <label htmlFor="">Your Email</label>
                <input 
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email' />
                <label htmlFor="">Write your message here </label>
                <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                 placeholder='Enter your message' rows="8" ></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form> 
        </div>
    </div>
  )
}

export default Contact
