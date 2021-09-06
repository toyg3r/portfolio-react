import React from "react";
import "../css/banner.css";
import logopic from "../assets/images/developer.svg";

function Banner(){
    return(
        <section className="banner">
        <div className="developer-bio">
            <p>Hello</p>
            <h2>I am<span>John Doe</span></h2>
            <h3>A creative developer</h3>
            <a href="foo" className="btn">Resume</a>
        </div>
        <div className="developer-img">
            <img src={logopic} alt="portfolio design" className="img-fluid" />
        </div>
    </section>
    );
}

export default Banner