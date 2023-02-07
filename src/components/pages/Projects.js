import React, { Fragment } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Loading from "../common/Loading";
import MyProjects from "./sections/MyProjects";

class Projects extends React.Component{
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
                            <Header activepage="projects"/>
                            <div className="container">
                                <div className="row d-flex align-content-center border-bottom mob-project-padding">
                                    <div className="col-md-12">
                                        <div className="headline-content">
                                            <h3 className="headline-title">My <span>Projects</span></h3>
                                            <p className="project-headline-subtitle">
                                                I am constantly learning and growing to become the best version of myself as a developer. 
                                                I made some of these projects for fun and to learn new technologies.
                                            </p>
                                        </div>
                                    </div>
                            </div>
                            <MyProjects /> 
                        </div> 
                    </Fragment>);
        }    
    }
}
export default Projects;