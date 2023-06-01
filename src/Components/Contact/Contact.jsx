import React, { useRef } from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {
  const form  = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_fc2c6a6','template_vdtewlt', form.current, 'xrpZ-SvW5_nyOWus5')
    e.target.reset()
  }
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>muaazazharbscs18@gmail.com</h5>
            <a href="mailto:muaazazharbscs18@gmail.com" target='_blank'>Send A Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Muaaz Azhar</h5>
            <a href="https://m.me/Mianmuaaz.azhar" target='_blank'>Send A Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+92304-4****86</h5>
            <a href="https://api.whatsapp.com/send?phone=+923044195086" target='_blank'>Send A Message</a>
          </article>
        </div>
        <form action="" ref={form} onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="email" name='email' placeholder='Email Address' required />
          <textarea name='message' rows="7" placeholder='Enter Your Message Here' required />
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact