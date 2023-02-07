import React from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";

const MyContact = () => {    
    return (<div className="col-md-12 text-center paddingy-85 m-paddingy-60">
                <h2 className="service-title">Interested in hiring me?</h2>
                <h5>I am open to freelance or full-time opportunities</h5>
                <br /><br />
                <NavLink className="btn btn-outline-success btn-blue " to="/contact">
                    <HiOutlineMail /> Let&apos;s start a conversation
                </NavLink>
            </div>);
}   
export default MyContact;