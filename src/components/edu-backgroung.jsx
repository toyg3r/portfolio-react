import React from "react";


function Eduback(props){
    return(
        <div className="education-item">
                    <i className="education-icon fa fa-graduation-cap"></i>
                    <div className="education-details">
                        <h3 className="education-institution">{props.uniname}</h3>
                        <h4 className="education-years">{props.years}</h4>
                        <h4 className="education-career">{props.career}</h4>
                        <p className="education-description">
                            {props.description}
                        </p>
                    </div>
                </div>
    );
}
export default Eduback