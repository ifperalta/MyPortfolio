import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Skills from "./sections/Skills";
import Frontend from "./sections/Services-Left";
import Backend from "./sections/Services-Right";
import MyWork from "./sections/MyWork";
import MyContact from "./sections/MyContact";
import ContactLink from "./sections/ContactLink";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Loading from "../common/Loading";

import { FiArrowRightCircle } from "react-icons/fi";
import { HiOutlineMail, HiCode } from "react-icons/hi";

import web from "../common/images/web.png";
import responsive from "../common/images/responsive.png";
import code from "../common/images/code.png";

import { home } from "../mockdata/data";

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloading: true
        };
    }

    async componentDidMount(){
        setTimeout(() => {
            this.setState({ isloading: false });  
        }, 500);
    }

    render(){

        if(this.state.isloading){
            return <Loading />;

        }else{
            return(<Fragment>
                        <Header activepage="home" />
                        <div className="container">
                            <header>
                                <div className="b-bottom pd-bottom-75 mt-5">
                                    <div className="row d-flex align-content-center">
                                        <div className="col-md-12">
                                            <div className="headline-content">
                                                <h2 className="headline-title display-3">Full Stack <span>Web Developer.</span></h2>
                                                <p className="headline-subtitle">
                                                    Hi. I&apos;m Ian, I am passionate about crafting great websites. I specialize in full 
                                                    stack web development with flawless front-end and user experience. 
                                                </p>
                                                <br />
                                                <NavLink className="btn btn-outline-primary btn-blue nav-margin-right" to="/projects"><HiCode /> Projects</NavLink>
                                                <NavLink className="btn btn-outline-success btn-orange " to="/contact"><HiOutlineMail /> Let&apos;s start talking</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>       
                        </div>
                                                
                        <div className="container pt-4 my-5">
                            <div className="row d-flex align-content-center"> 
                                <div className="col-md-12 text-center mb-5">
                                    <h2 className="service-title">Let&apos;s work together</h2>
                                    <h5>
                                        Top three specialties
                                    </h5>    
                                </div>
                            </div>
                            <div className="row d-flex align-content-center"> 
                                <div className="col-md-4 text-center mx-mob">
                                    <div className="rounded-wrappers rounded">
                                        <img src={web} className="services-ico-web" />
                                        <h4>Web Applications</h4>
                                        <p>Build an app that loads fast with better perfomance.</p>

                                        {/* <NavLink className="btn btn-outline-success btn-blue " to="/projects">List of Projects</NavLink> */}
                                    </div>
                                </div>
                                <div className="col-md-4 text-center mx-mob">
                                    <div className="rounded-wrappers rounded">
                                        <img src={responsive}  className="services-ico-res" />
                                        <h4>Responsive</h4>
                                        <p>Compatible with all devices and create a positive experience. </p>
                                        
                                        {/* <NavLink className="btn btn-outline-success btn-blue " to="/projects">My Projects</NavLink> */}
                                    </div>
                                </div>
                                <div className="col-md-4  text-center mx-mob">
                                    <div className="rounded-wrappers rounded">
                                        <img src={code} className="services-ico-code" /> 
                                        <h4>Clean Code</h4>
                                        <p>Allows readability, easy maintenance, and performs better.</p>
                                        
                                        {/* <NavLink className="btn btn-outline-success btn-blue " to="https://github.com/ifperalta/">My GitHub</NavLink> */}
                                    </div>
                                </div>
                                {/* <ContactLink /> */}
                            </div>         
                        </div>

                        <div className="container paddingy-50 b-bottom">
                            <div className="row d-flex align-content-center "> 
                                <Frontend />
                                <Backend />
                            </div>         
                        </div>
                        
                        <div className="container grey-background">
                            <div className="row d-flex align-content-center"> 
                                <MyContact />
                            </div>         
                        </div>
                    </Fragment>);
        }            
    }
}
export default Homepage;