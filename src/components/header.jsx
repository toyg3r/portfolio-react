import React from "react";
import "../css/header.css";
import Menucard from "./menu";


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
            <Menucard
            about={"About"}
            edu={"Education"}
            skill={"Skills"}
            pro={"Projects"}
            cont={"Contact"}
             />
        </div>
        <div className="mobile_nav">
        <Menucard
            about={"About"}
            edu={"Education"}
            skill={"Skills"}
            pro={"Projects"}
            cont={"Contact"}
             />
            </div>
    </header>

    );
}
export default Header;