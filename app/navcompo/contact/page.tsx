import React from 'react'
import { IoHome } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import "./contact.css";




const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-overlay'>
            <div className="contact-content">
            <div className="contact-left">
                <h1>Contact Us</h1>
                <p>Feel Free To Contact Me</p>
                <div className='contact-info'>
                    <div className="contact-item">
                        <IoHome size={30}/>

                    
                    <div>
                    <h3>Address</h3>
                    <p>Gulshan E Hadeed</p>
                    </div>
                    </div>
                </div>
                <div className="contact-item">
                <BsTelephone size={30}/>
                <div>
                    <h3>Phone</h3>
                    <p>92 329 3086256</p>
                </div>
            </div>
            <div className="contact-item">
                <IoMailOutline size={30}/>
                <div>
                    <h3>Email</h3>
                    <p>subhankaladi@gmail.com</p>
                    </div>
            </div>
            </div>
            
       
        <div className="contact-right">
            <h2>Send Message</h2>
            <form>
                <input type="text" placeholder='FullName' required />
            <input type="email" placeholder='email' />
            <textarea placeholder='type your message' required></textarea>
           <button  type='button'>Send</button>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact