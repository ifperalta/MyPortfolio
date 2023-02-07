import React, { Fragment } from "react";
import { Route, Switch, Redirect} from 'react-router-dom';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./common/Footer";

class App extends React.Component{
    render(){
            return(<Fragment>
                    <div className="main-wrapper">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/" component={Home} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                    <div className="footer-wrapper">
                        <div className="main-wrapper">    
                            <div className="container">
                                <Footer show={true} />
                            </div>
                        </div>    
                    </div> 
                </Fragment> );
    }
}

export default App;