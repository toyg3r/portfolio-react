import React from "react";
import "../css/footer.css";
import 'font-awesome/css/font-awesome.min.css';

function Footer(){
    return(
        <footer>
            <div id="footer" className="footer-container">
                <div className="upper-footer">
                    <div className="social-contact">
                        <h2>Contact:</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        <div className="list-group list-group-horizontal">
                            <a href="foo"><i className="fa fa-github"></i></a>
                            <a href="#footer"><i className="fa fa-linkedin"></i></a>
                            <a href="#footer"><i className="fa fa-twitter"></i></a>
                            <a href="#footer"><i className="fa fa-codepen"></i></a>
                            <a href="#footer"><i className="fa fa-medium"></i></a>
                            <a href="#footer"><i className="fa fa-slack"></i></a>
                            <a href="#footer"><i className="fa fa-stack-overflow"></i></a>
                        </div>
                    </div>

                    <div className="address-contact">
                        <h2>Address:</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur.</p>
                        <div className="list-group list-group-horizontal">
                            <a href="#footer"><i className="fa fa-map-marker"></i></a>
                            <a href="#footer"><i className="fa fa-envelope"></i></a>
                            <a href="#footer"><i className="fa fa-phone"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;