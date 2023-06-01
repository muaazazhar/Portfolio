import React, { useState } from "react";
import "./navbar.css"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {GiSkills} from "react-icons/gi";
import {AiOutlineProfile} from "react-icons/ai";
import {BiMessageSquareDetail} from "react-icons/bi";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav("#")}} className={activeNav === '#' ? "active" : ""}><AiOutlineHome className="navbar-icons" size={20}/></a>
      <a href="#about" onClick={()=>{setActiveNav("#about")}} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser className="navbar-icons" size={20}/></a>
      <a href="#skills" onClick={()=>{setActiveNav("#skills")}} className={activeNav === '#skills' ? 'active' : ''}><GiSkills className="navbar-icons" size={20}/></a>
      <a href="#projects" onClick={()=>{setActiveNav("#projects")}} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineProfile className="navbar-icons" size={20}/></a>
      <a href="#contact" onClick={()=>{setActiveNav("#contact")}} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail className="navbar-icons" size={20}/></a>
    </nav>
  );
};

export default Navbar;
