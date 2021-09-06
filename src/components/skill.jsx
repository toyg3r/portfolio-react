import React from "react";
import "../css/skills.css";
import {ReactComponent as Htmllogo} from "../assets/icons/skills/html5.svg";
import {ReactComponent as Csslogo} from "../assets/icons/skills/css3.svg";
import {ReactComponent as Javaslogo} from "../assets/icons/skills/javascript.svg";
import {ReactComponent as Nodelogo} from "../assets/icons/skills/node-dot-js.svg";
import {ReactComponent as Mongologo} from "../assets/icons/skills/mongodb.svg";
import {ReactComponent as Expresslogo} from "../assets/icons/skills/express.svg";
import {ReactComponent as Reactlogo} from "../assets/icons/skills/react.svg";
import {ReactComponent as Pythonlogo} from "../assets/icons/skills/python.svg";
import Createskillcard from "./creatskill";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const logos = [
    {
        id:1,
        component: <Htmllogo/>,
        name:"HTML5"
    },
    {
        id:2,
        component: <Csslogo/>,
        name:"CSS3"
    },
    {
        id:3,
        component: <Javaslogo/>,
        name:"Javascript"
    },
    {
        id:4,
        component: <Nodelogo/>,
        name:"Node JS"   
    },
    {
        id:5,
        component: <Mongologo/>,
        name:"Mongo DB"   
    },
    {
        id:6,
        component: <Expresslogo/>,
        name:"Express JS"   
    },
    {
        id:7,
        component: <Reactlogo/>,
        name:"React JS"   
    },
    {
        id:8,
        component: <Pythonlogo/>,
        name:"Python"   
    },  
];

function Skills(){

    return(
        <section className="skills" id="skills">
            <h2 className="skills_heading">Skills</h2>

            <div className="skill-content">
                {logos.map(Createskillcard)}
            </div>
        </section>

    );
}
export default Skills;