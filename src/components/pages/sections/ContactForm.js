import React, { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from 'react-bootstrap';
import Joi from 'joi-browser';

import { HiOutlineMail } from "react-icons/hi";

export const ContactForm = () => {
    const form = useRef();
    const [isValiate, setValidate] = useState(true);
    const [emailstatus, setEmailStatus] = useState(false);

    const resetEmailForm = () => { 
        document.getElementById("emailForm").reset();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        let inputField = {
            from_name: e.target.from_name.value,
            from_email: e.target.from_email.value,
            message: e.target.message.value
        } 

        //validate form
        if((inputField.from_name.trim().length > 0) && (inputField.from_email.trim().length > 0) && (inputField.message.trim().length > 0)){
            // send the email    
            emailjs.sendForm('service_ms4uulp', 'template_t84j5bm', form.current, 'AiVl9xpYIsIFKm7ab')
            .then((result) => {
                if(result.text === "OK"){
                    setEmailStatus(true);
                    setValidate(true);
                    resetEmailForm();
                }
            }, (error) => {
                console.log(error);
            });
        }else{ 
            setValidate(false);
        }

        // turn off notification 
        setTimeout(() => {
            setEmailStatus(false);
            setValidate(true);
        }, 4000);        
    };

    return (
        <Fragment>
            <div className="contact_notification">
                {!isValiate && <div className='alert alert-warning' role='alert'>Oops... All the fields are required!</div>}
                {emailstatus && <div className='alert alert-info' role='alert'>Cheers! Your email has been sent!</div>}   
            </div>
            <Form ref={form} onSubmit={sendEmail} id="emailForm">  
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name="from_name" className="inputfield" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" name="from_email" className="inputfield" placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control placeholder="Tell me what you need" name="message" className="contactTextArea" as="textarea" rows={3} />
                </Form.Group>
                <br />
                <button type="submit" className="btn btn-blue ml-auto"><HiOutlineMail /> Send</button>
                
            </Form> 
        </Fragment>    
    );
};
