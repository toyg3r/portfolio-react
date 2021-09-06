import React from "react";
import "../css/projects.css";
import Projectdetail from "./projectcard";
import projectsinformation from "../projectsinfo";

function Project(){
    return(
        <section className="projects" id="projects">
        <h2 className="projects_heading">Projects</h2>

        <div className="project-wrapper row">
            {projectsinformation.map(Projectdetail)}
        </div>
    </section>
    );
}
export default Project;