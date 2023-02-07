import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../common/images/logo-ip.png";

class Header extends  React.Component{
    state = {
        show: false,
    }

    toggle = () => this.setState((currentState) => ({
        show: !currentState.show
    }));

    render(){
        return (<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 nav-container">
                    <div className="container main-wrapper">
                            <div className="col-md-8">
                                <NavLink to="/"><img src={logo} className="logo" /> <label className="webtitle">ian peralta</label></NavLink>
                            </div>    
                            <div className="col-md-4">
                                <button className="navbar-toggler" onClick={this.toggle}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                                    <NavLink className="nav-item top-nav" to="/">Home</NavLink>
                                    <NavLink className="nav-item top-nav" to="/projects">Projects</NavLink>
                                    <NavLink className="nav-item top-nav" to="/contact">Contact</NavLink>
                                </div>
                                {this.state.show && 
                                    <ul className="nav flex-column popup-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item mtop">
                                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                                        </li>
                                        <li className="nav-item mtop">                                        
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                }
                            </div>    
                            
                            
                    </div>
                </nav>);
    }
}   
export default Header;