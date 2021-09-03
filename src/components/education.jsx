import React from "react";
import "../css/education.css"

function Education(){
    return(

        <section class="education" id="education">
            <h2 class="education-heading">Education</h2>

            <div class="education-content">
                <div class="education-item">
                    <i class="education-icon fa fa-graduation-cap"></i>
                    <div class="education-details">
                        <h3 class="education-institution">University of British Columbia</h3>
                        <h4 class="education-years">2009 - 2013</h4>
                        <h4 class="education-career">Computer Science</h4>
                        <p class="education-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore, aut error placeat iusto ut, dolores
                            quaerat aspernatur quam nobis, itaque illo beatae
                            velit porro. Consequuntur amet velit officiis
                            tenetur cupiditate.
                        </p>
                    </div>
                </div>

                <div class="education-item">
                    <i class="education-icon fa fa-graduation-cap"></i>
                    <div class="education-details">
                        <h3 class="education-institution">University of Waterloo</h3>
                        <h4 class="education-years">2014 - 2018</h4>
                        <h4 class="education-career">Web Design</h4>
                        <p class="education-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore, aut error placeat iusto ut, dolores
                            quaerat aspernatur quam nobis, itaque illo beatae
                            velit porro. Consequuntur amet velit officiis
                            tenetur cupiditate.
                        </p>
                    </div>
                </div>

                <div class="education-item">
                    <i class="education-icon fa fa-graduation-cap"></i>
                    <div class="education-details">
                        <h3 class="education-institution">University of Cambridge</h3>
                        <h4 class="education-years">2019 - 2021</h4>
                        <h4 class="education-career">Android Developer</h4>
                        <p class="education-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore, aut error placeat iusto ut, dolores
                            quaerat aspernatur quam nobis, itaque illo beatae
                            velit porro. Consequuntur amet velit officiis
                            tenetur cupiditate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;