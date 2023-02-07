import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {

    let credits = `This website is styled using Bootstrap. I added flavours by customizing the pages and built it using React.`;
    const todaysDate = new Date()
    const currentYear = todaysDate.getFullYear();

    return (<div className="footer pb-5 pt-5">
                    <div className="container-full">
                        <div className="row">
                            <div className="col-md-7 pl-5 pt-2 m-col-footer-7">
                                <div className="copy"> &copy; {currentYear}  ianperalta.dev </div><br />
                                <div className="copy copywrite">
                                    { props.show ?  credits : "" }
                                </div>
                            </div>
                            <div className="col-md-3 pl-5 m-col-footer-3">
                                <h4>Let&apos;s connect</h4>
                                <ul className="list-unstyled p-0">
                                    <li><a href="mailto:hello-ian@ianperalta.dev" data-bypass="">Hello@</a><br /> </li>
                                    <li><a href="https://ca.linkedin.com/in/ianperalta"  rel="noreferrer" target="_blank" data-bypass="">LinkedIn</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 pl-5  m-col-footer-3">
                                <h4>Quick links</h4>
                                <ul className="list-unstyled p-0">
                                    <li><NavLink className="footer-nav-item" to="">Home</NavLink></li>
                                    <li><NavLink className="footer-nav-item" to="/projects">Projects</NavLink></li>
                                    <li><NavLink className="footer-nav-item" to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>);
}   
export default Footer;