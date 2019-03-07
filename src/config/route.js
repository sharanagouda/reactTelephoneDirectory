import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";

import ReactTodo from "./../component/reactTodo";
import ReduxTodo from "./../component/reduxTodo/reduxTodo";
import About from '../container/about/About';
import Home from '../container/home/Home';
import CustomNavBar from '../container/customNavbar/CustomNavBar';

const PageNotFound = () => (<div>404 Page Not Found.</div>);

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <CustomNavBar/>
                    <Switch>
                        <Route path="/" exact  component={ReactTodo} />
                        <Route path="/home" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/reduxtodo" exact component={ReduxTodo} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;