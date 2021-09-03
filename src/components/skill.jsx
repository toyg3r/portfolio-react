import React from "react";
import "../css/skills.css"
import htmlpic from "../assets/icons/skills/html5.svg";
import csspic from "../assets/icons/skills/css3.svg";
import javasc from "../assets/icons/skills/javascript.svg";
import nodejs from "../assets/icons/skills/node-dot-js.svg";
import mong from "../assets/icons/skills/mongodb.svg";
import exp from "../assets/icons/skills/express.svg";
import reac from "../assets/icons/skills/react.svg";
import pyt from "../assets/icons/skills/python.svg";

function Skills(){
    return(
        <section className="skills" id="skills">
            <h2 className="skills_heading">Skills</h2>

            <div className="skill-content">
                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-right slide-in" data={htmlpic}></object>
                    </div>
                    <h3 className="skill-title">HTML5</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-right slide-in" data={csspic}></object>
                    </div>
                    <h3 className="skill-title">CSS3</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-right slide-in" data={javasc}></object>
                    </div>
                    <h3 className="skill-title">Javascript</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-right slide-in" data={nodejs}></object>
                    </div>
                    <h3 className="skill-title">Node JS</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-left slide-in" data={mong}></object>
                    </div>
                    <h3 className="skill-title">Mongo DB</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-left slide-in" data={exp}></object>
                    </div>
                    <h3 className="skill-title">Express JS</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-left slide-in" data={reac}></object>
                    </div>
                    <h3 className="skill-title">React JS</h3>
                </div>

                <div className="skill">
                    <div className="skill-img-container" data-aos="zoom-in">
                        <object className="slide-left slide-in" data={pyt}></object>
                    </div>
                    <h3 className="skill-title">Python</h3>
                </div>
            </div>
        </section>

    );
}
export default Skills;