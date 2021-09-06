import React from "react";

function Menucard(props){
    return(
        <ul>
        <li><a href="#about">{props.about}</a></li>
        <li><a href="#education">{props.edu}</a></li>
        <li><a href="#skills">{props.skill}</a></li>
        <li><a href="#projects">{props.pro}</a></li>
        <li><a href="#contact">{props.cont}</a></li>
    </ul>

    );

}
export default Menucard;
