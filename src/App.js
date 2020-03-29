import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Error from "./screens/404";
import "./config";

class App extends Component{
     render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact component={Error} />
                </Switch>
            </Router>
        )
}}
export default App;
