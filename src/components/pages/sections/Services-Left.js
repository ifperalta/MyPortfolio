import React from "react";

import { NavLink } from "react-router-dom";
import { HiCode } from "react-icons/hi";

const Frontend = () => {    
    return (<div className="col-md-6 left-services padding-100 mx-mob">
                <h2 className="service-title">Front-end</h2>
                <p> My tools of choice are Javascript, React and Bootstrap. 
                    I like building functional prototype and coding each page element or components. 
                    As a frontend developer, I can also design a web page, but I prefer to code rather than rendering 
                    using a design application.</p>
                <br /><br />

                <NavLink className="btn btn-outline-primary btn-pale nav-margin-right" to="/projects"><HiCode /> Projects</NavLink>
            </div>);
}   
export default Frontend;