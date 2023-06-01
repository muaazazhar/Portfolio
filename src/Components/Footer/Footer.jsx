import React from 'react'
import "./footer.css"
import {FaFacebookF, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Muaaz</a>
      <ul className='permalinks'>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/Mianmuaaz.azhar" target='_blank'><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/muaaz-azhar-664a771a2/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/muaazazhar/" target='_blank'><FaGithub/></a>
      </div>
      <div className="footer_copyright">
        <small className='copyright'>
          &copy; Muaaz Azhar. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer