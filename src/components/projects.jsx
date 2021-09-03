import React from "react";
import "../css/projects.css";
import pro1 from "../assets/images/project-1.jpg";
import pro2 from "../assets/images/project-2.jpg";
import pro3 from "../assets/images/project-3.jpg";
import pro4 from "../assets/images/project-4.jpg";
import pro5 from "../assets/images/project-5.jpg";
import pro6 from "../assets/images/project-6.jpg";

function Project(){
    return(
        <section className="projects" id="projects">
        <h2 className="projects_heading">Projects</h2>

        <div className="project-wrapper row">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" target="_blank">
                    <div className="cards-container">
                        <div className="card-background">
                            <img src={pro1} className="img-fluid" />
                        </div>
                        <div className="card-desc">
                            <h6>Development</h6>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" target="_blank">
                    <div className="cards-container">
                        <div className="card-background">
                            <img src={pro2} className="img-fluid" />
                        </div>
                        <div className="card-desc">
                            <h6>Development</h6>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" target="_blank">
                    <div className="cards-container">
                        <div className="card-background">
                            <img src={pro3} className="img-fluid" />
                        </div>
                        <div className="card-desc">
                            <h6>Development</h6>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" target="_blank">
                    <div className="cards-container">
                        <div className="card-background">
                            <img src={pro4} className="img-fluid" />
                        </div>
                        <div className="card-desc">
                            <h6>Development</h6>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" target="_blank">
                    <div className="cards-container">
                        <div className="card-background">
                            <img src={pro5} className="img-fluid" />
                        </div>
                        <div className="card-desc">
                            <h6>Development</h6>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" target="_blank">
                    <div className="cards-container">
                        <div className="card-background">
                            <img src={pro6} className="img-fluid" />
                        </div>
                        <div className="card-desc">
                            <h6>Development</h6>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    );
}
export default Project;