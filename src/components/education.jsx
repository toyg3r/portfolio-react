import React from "react";
import "../css/education.css"
import Eduback from "./edu-backgroung";
import preexper from "../background";

function Education(){
    return(

        <section className="education" id="education">
            <h2 className="education-heading">Education</h2>
            <div className="education-content">
                {preexper.map(Eduback)}
            </div>
        </section>
    );
}

export default Education;