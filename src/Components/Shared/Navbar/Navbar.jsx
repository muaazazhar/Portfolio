import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { AiOutlineProfile } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";

const navLinks = [
  { id: "home", Icon: AiOutlineHome },
  { id: "about", Icon: AiOutlineUser },
  { id: "skills", Icon: GiSkills },
  { id: "projects", Icon: AiOutlineProfile },
  { id: "contact", Icon: BiMessageSquareDetail },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveNav(`#${navLinks[navLinks.length - 1].id}`);
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = navLinks[0].id;
      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveNav(`#${current}`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      {navLinks.map(({ id, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setActiveNav(`#${id}`)}
          className={activeNav === `#${id}` ? "active" : ""}
        >
          <Icon className="navbar-icons" size={20} />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
