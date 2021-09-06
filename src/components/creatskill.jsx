import React from "react";

function Createskillcard(props){
    return(
        <div key={props.id} className="skill">
        <div className="skill-img-container" data-aos="zoom-in">
            {props.component}
        </div>
        <h3 className="skill-title">{props.name}</h3>
    </div>

    );

}
export default Createskillcard;
