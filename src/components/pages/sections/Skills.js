import React from "react";
import { svg } from "../../mockdata/data";

const Skills = () => {
    return (<div className="space-md border-bottom">
                <div className="container">
                        <div className="row ">
                            <div className="col-md-12 text-center"> 
                                <h2>Skills</h2><br /><br />
                            </div>
                        </div>        
                        <div className="row ">
                                <div className="col-md-12">                                        
                                        <div className="row justify-content-center">
                                                <div className="col-md-3 text-center">
                                                    <h4 className="py-3">Frontend</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].react} height="42" /></li>
                                                        <li><img src={svg[0].js} height="45" /></li>
                                                        <li><img src={svg[0].html} height="45" /></li>
                                                        <li><img src={svg[0].css} height="45" /></li>
                                                    </ul>                                                
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <h4 className="py-3">Database</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].mysql} height="45" /></li>  
                                                    </ul>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <h4 className="py-3">Backend</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].node} height="45" /></li>
                                                        <li><img src={svg[0].php} height="45" /></li>
                                                        <li><img src={svg[0].java} height="45" /></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <h4 className="py-3">DevOps</h4> 
                                                    <ul className="icon-skills">
                                                        <li><img src={svg[0].git} width="45" /></li>
                                                        <li><img src={svg[0].docker} width="45" /></li>
                                                        <li><img src={svg[0].linux} width="45" /></li>
                                                        <li><img src={svg[0].aws} width="45" /></li>          
                                                    </ul>                       
                                                </div>
                                        </div>
                                </div>  
                        </div>  
                        <div className="row">
                            <div className="col-md-12 py-2"></div>
                        </div>      
                </div>
            </div> );
}   
export default Skills;