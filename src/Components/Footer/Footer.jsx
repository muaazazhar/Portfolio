import React from "react";
import "./footer.css";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Muaaz Azhar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.facebook.com/Mianmuaaz.azhar"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/muaaz-azhar-664a771a2/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/muaazazhar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small className="copyright">
          &copy; Muaaz Azhar. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
