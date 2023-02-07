import React from "react";
import { NavLink } from "react-router-dom";

const ContactLink = () => {    
    return (<div className="col-md-12 text-center mt-5 py-2">
                <h5>Let&apos;s build something</h5>
                <br />
                <NavLink className="btn btn-outline-success btn-blue " to="/contact">Send me a message</NavLink>
            </div>);
}   
export default ContactLink;