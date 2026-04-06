
import React, { useState } from "react";
import { Link } from "react-router";
import { Hamburger } from "./Hamburger";
import "../../styles/Header/Header.css"
import "../../styles/Header/Nav.css"

const navList = [
  { title: "Home", path: "/" },
  { title: "Characters", path: "/Characters" },
  { title: "Seasons", path: "/Seasons" },
  { title: "Relationships", path: "/Relationships" },
  { title: "Music", path: "/Music" },
  { title: "About", path: "/About" },
  { title: "Contact", path: "/Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleHamburger = () => {
    setOpen(!open)
  }
  return (
   <>
   <header>
      <nav  className="desktop">
        <section className="desktop-logo">Soy Luna Fandom</section>
        <ul>
          {navList.map((i) => (
            <li><Link to={i.path}>{i.title}</Link></li>
          ))}
        </ul>       
      </nav>
      <nav className="mobile">
        <section className="mobile-top">
          <section className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={open}/>
          </section>
          <section className="mobile-logo">Soy Luna Fandom</section>
        </section>
          <ul>
            {navList.map((i) => (
              <li><Link to={i.path}>{i.title}</Link></li>
            ))}
          </ul>
      </nav>
      <style> {`
        nav {
            width: 100%;
            height: auto;              
        }

        nav ul {
            display: ${open ? 'flex' : 'none'};
            width: 100%;      
            flex-direction: column;
            flex-wrap: wrap;
        }

        nav ul li {
            list-style-type: none;
            text-align: center;
            font-size: clamp(20px, 2vw, 18px); 
        }
        a {
            text-decoration: none;
        }
    `}</style>
  </header>
</>    
  );
};

export default Header;
