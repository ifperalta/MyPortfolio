import React, { Fragment } from "react";
import { Form } from 'react-bootstrap';

//import { GrGithub, GrLinkedin } from "react-icons/gr";

import Header from "../common/Header";
import Footer from "../common/Footer";
import Loading from "../common/Loading";

import { ContactForm } from "./sections/ContactForm";

class Contact extends React.Component{
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
                        <Header activepage="contact"/>
                                <div className="contact-wrapper container mob-contact"> 
                                    <div className="row">               
                                        <div className="col-md-4">
                                            <h3 className="headline-title display-3 contact-title">Contact</h3>
                                            <p className="contact-headline-subtitle">I love to hear from you. <br />Let’s build something great together.</p>
                                        </div>
                                        <div className="col-md-8">
                                            <ContactForm />
                                        </div>
                                    </div>
                                </div>
                </Fragment>);
        }            
    }
}
export default Contact;