import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";

import ReactTodo from "./../component/reactTodo";
import ReduxTodo from "./../component/reduxTodo/reduxTodo";

const PageNotFound = () => (<div>404 Page Not Found.</div>);

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/reduxtodo" exact component={ReduxTodo} />
                    <Route path="/"  component={ReactTodo} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;