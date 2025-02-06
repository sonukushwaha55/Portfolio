import React from 'react'
import './Contact.css'
import logo from '../../assets/logo.png'
import 'remixicon/fonts/remixicon.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={logo  } alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to taken on new projects.so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <i class="ri-mail-fill"></i>
                    <h1>sonukumar1772001@gmail.com</h1>
                    </div>
                    <div className="contact-detail">
                    <i class="ri-phone-fill"></i>
                    <h1>(+91) 7352476780</h1>
                    </div>
                    <div className="contact-detail">
                    <i class="ri-map-pin-2-fill"></i>
                    <h1>Bihar, India</h1>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name="email" />
                <label htmlFor="">Write your message here </label>
                <textarea name="message" placeholder='Enter your message' rows="8" ></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
