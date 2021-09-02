import React from "react";
import aboutpic from "../assets/images/profile.svg";
import "../css/about.css"

function About(){
    return(
        <section className="about" id="about">
        <h2 className="about_heading">About me</h2>

        <div className="about-content row">
            <div className="about-image col-md-4">
                <img src={aboutpic} className="img-fluid" />
            </div>

            <div className="about-desc col-md-8">
                <h2 className="about-title">Hello There!</h2>
                <h4 className="about-subtitle">A CSE Undergrade Student;</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Neque minus aliquid dolores libero, commodi eos
                    sapiente autem ad, voluptates praesentium quod, odio
                    voluptatem nesciunt vero itaque? Consequatur ipsa amet
                    deleniti.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, magnam quisquam numquam, recusandae voluptatem
                    ipsa error earum magni saepe repellendus in adipisci
                    molestias excepturi aperiam, voluptatibus ipsum
                    explicabo inventore perferendis.
                </p>
            </div>
        </div>
    </section>

    );
}
export default About;