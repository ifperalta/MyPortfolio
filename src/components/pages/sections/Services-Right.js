import React from "react";

import { NavLink } from "react-router-dom";
import { HiCode } from "react-icons/hi";

const Backend = () => {    
    return (<div className="col-md-6 right-services padding-100 mx-mob">
                <h2 className="service-title">Backend</h2>
                <p>An application with an optimized code will perform better. I consider backend development a unique characteristic of every full-stack developer. I like using Java, NodeJs/Typescript, and PHP as these programming languages support OOP and design patterns which makes backend coding more enjoyable.</p>

                <br /><br />
                <NavLink className="btn btn-outline-primary btn-blue nav-margin-right" to="/projects"><HiCode /> Projects</NavLink>
            
            </div>);
}   
export default Backend;