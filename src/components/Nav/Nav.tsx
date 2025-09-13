import { useState } from 'react';
import { NavLink } from 'react-router';
import "./Nav.css";

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                  ☰ 
            </button>
        <ul className={`nav ${menuOpen ? "open" : ""}`}>
            <li>
                <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
                <NavLink to={"/Characters"}>Characters</NavLink>
            </li>
            <li>
                <NavLink to={"/Relationships"}>Relationships</NavLink>
            </li>
            <li>
                <NavLink to={"/Seasons"}>Seasons</NavLink>
            </li>
            <li>
                <NavLink to={"/Music"}>Music</NavLink>
            </li>
            <li>
                <NavLink to={"/Ranking"}>Ranking</NavLink>
            </li>
            <li>
                <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
        </ul>
        </nav>
    )
}