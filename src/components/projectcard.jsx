import React from "react";
function Projectdetail(props){
    return(
        <div className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" target="_blank">
                    <div className="cards-container">
                        <div className="card-background">
                            <img src={props.pic} className="img-fluid" />
                        </div>
                        <div className="card-desc">
                            <h6>{props.depart}</h6>
                            <h4>{props.course}</h4>
                            <p>{props.heading}</p>
                        </div>
                    </div>
                </a>
            </div>
    );

}
export default Projectdetail;

