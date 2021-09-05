import React from "react";
import "../css/header.css";


function Header(){
    return(
       <header>
        <div className="navbar-logo">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="home">
                    <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
            </a>
            <a href="#" className="logo">Portfolio</a>
        </div>

        <div className="menu-icon">
            <span className="menu-inner"></span>
        </div>

        <div className="desktop_nav">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className="mobile_nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
    </header>

    );
}
export default Header;