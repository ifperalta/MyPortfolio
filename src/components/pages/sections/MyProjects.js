import React, { Fragment, useEffect, useState } from "react";
import { projects } from "../../mockdata/data";
import { FiArrowRightCircle } from "react-icons/fi";

// Loads all web apps
const Webapp = () => {
    const [category] = useState("webapp");
    const [projectlists, setProjects] = useState(projects);
    let filteredProjects = [];

    useEffect(() => {
        filteredProjects = projects.filter(item => item.category.toUpperCase() == category.toUpperCase());
        setProjects(filteredProjects);
    }, [category]);
    
    return (<Fragment>
                <div className="pt-5">
                    <div className="row d-flex justify-content-start">
                        <div className="col-md-12">
                            <h3 className="headline-title mb-5 mb-project-subtitle">Full Stack</h3> 
                        </div>    
                    </div>
                    {projectlists.map((project, key) => {
                        return(<div key={key} className="row d-flex mb-5 border-bottom pb-5 justify-content-start">
                                    <div className="col-md-3 demo-img">
                                        <img src={project.project_image1.url} />    
                                    </div>
                                    <div className="col-md-6 mb-project-content">
                                        <h3>{project.project_name}</h3>
                                        <p>{project.project_description}</p>
                                        <div className="row mb-4 mob-tech">
                                            <div className="col-md-12">
                                                <ul className="list-unstyled mt-3">
                                                    <li className="title-project"><b>Technologies</b></li>
                                                    <li>Backend: {project.work.backend}</li>
                                                    <li>Frontend: {project.work.frontend}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href={project.project_url} rel="noreferrer" target="_blank" className="project-bt"><button  className="btn btn-dark">Source Code <FiArrowRightCircle /></button></a>
                                        <a href="" rel="noreferrer" target="_blank" className="project-bt"><button className="btn btn-blue-reg">Documentation <FiArrowRightCircle /></button></a>
                                        <a href={project.demo_url} rel="noreferrer" target="_blank" className="project-bt"><button className="btn btn-warning">Demo <FiArrowRightCircle /></button></a>
                                    </div>
                                    <div className="col-md-3 mb-project-tech">
                                        <ul className="list-unstyled project-intro">
                                            <li className="title-project"><b>Technologies</b></li>
                                            <li>Backend: {project.work.backend}</li>
                                            <li>Frontend: {project.work.frontend}</li>
                                        </ul>
                                    </div>
                                </div>); 
                    })}
                </div>
            </Fragment>);
}

// Loads all mini projects
const MiniProjects = () => {
    const [category] = useState("mini");
    const [projectlists, setProjects] = useState(projects);
    let filteredProjects = [];

    useEffect(() => {
        filteredProjects = projects.filter(item => item.category.toUpperCase() == category.toUpperCase());
        setProjects(filteredProjects);
    }, [category]);
    
    return null;
    
    // return (<div className="container border-bottom pd-bottom-50">
    //             <div className="row d-flex justify-content-start">
    //                 <div className="col-md-12">
    //                     <h3 className="headline-title mb-5">Mini</h3> 
    //                 </div>    
    //             </div>
    //             <div className="row d-flex justify-content-start mt-4">
    //                 {projectlists.map((project, key) => {
    //                 return(<div key={key} className="col-md-6 p-3">
    //                                 <h4>{project.project_name}</h4>
    //                                 <br />
    //                                 <div className="row mb-4">
    //                                     <div className="col-md-12 demo-img-mini">
    //                                         <img src={project.project_image1.url} />    
    //                                     </div>
    //                                 </div>
    //                                 <p className="w-90">{project.project_description}</p>
    //                                 <a href={project.project_url} rel="noreferrer" target="_blank"><button className="btn btn-dark">Source Code <FiArrowRightCircle /></button></a>
    //                         </div>); 
    //                 })}
    //             </div>
    //     </div>);
}


// Loads all templates
/*
const Templates = () => {
    const [category] = useState("prototype");
    const [projectlists, setProjects] = useState(projects);
    let filteredProjects = [];

    useEffect(() => {
        filteredProjects = projects.filter(item => item.category.toUpperCase() == category.toUpperCase());
        setProjects(filteredProjects);
    }, [category]);
    
    return (<div className="container border-bottom pd-bottom-50">
                <div className="row d-flex justify-content-start">
                    <div className="col-md-12">
                        <h3 className="headline-title mb-5">App Template</h3> 
                    </div>    
                </div>    

                {projectlists.map((project, key) => {
                return(<div key={key} className="row d-flex justify-content-start mini">
                            <div className="col-md-4">
                                <h4>{project.project_name}</h4>
                                <p>{project.project_description}</p>
                                <a href={project.project_url}><button className="btn btn-dark">Source Code <FiArrowRightCircle /></button></a>
                            </div>    
                            <div className="col-md-4 demo-img">
                                <img src={project.project_image1.url} />    
                            </div>
                            <div className="col-md-4  demo-img">
                                <img src={project.project_image2.url} />    
                            </div>
                        </div>); 
                })}
            </div>);
}*/

const About = () => {
    return(<div className="bg-light margin-bt-80">     
                <div className="row d-flex justify-content-start mini">
                    <div className="col-md-7">
                        <h4>About this portfolio website</h4>
                        <p>This website is styled using Bootstrap. I added flavours by customizing the pages and built it using React.</p><br />
                    </div>
                    <div className="col-md-2 pt-4">
                        <ul className="list-unstyled">
                            <li className="title"><b>Frontend</b></li>
                            <li>React and Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-md-3 pt-4">
                        <ul className="list-unstyled">
                            <li className="title"><b>DevOps</b></li>
                            <li>AWS EC2, Linux, BitBucket and Docker</li>
                        </ul>
                    </div>
                </div>
            </div>);
}

const MyProjects = () => {
    return (<Fragment>
                <Webapp />
                <MiniProjects />
                <About />
            </Fragment>);
}

export default MyProjects;