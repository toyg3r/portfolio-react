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
import AOS from 'aos';
import 'aos/dist/aos.css';
{AOS.init()}

function Skills(){

    return(
        <section className="skills" id="skills">
            <h2 className="skills_heading">Skills</h2>

            <div className="skill-content">
                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <Htmllogo />
                    </div>
                    <h3 className="skill-title">HTML5</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <Csslogo />
                    </div>
                    <h3 className="skill-title">CSS3</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <Javaslogo />
                    </div>
                    <h3 className="skill-title">Javascript</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <Nodelogo />
                    </div>
                    <h3 className="skill-title">Node JS</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <Mongologo />
                    </div>
                    <h3 className="skill-title">Mongo DB</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                       <Expresslogo />
                    </div>
                    <h3 className="skill-title">Express JS</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <Reactlogo />
                    </div>
                    <h3 className="skill-title">React JS</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <Pythonlogo />
                    </div>
                    <h3 className="skill-title">Python</h3>
                </div>
            </div>
        </section>

    );
}
export default Skills;