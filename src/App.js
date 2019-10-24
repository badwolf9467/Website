import React, {Component} from 'react';
import RegisterForm from './RegisterForm'
import Login from './Loginpage'
import Nav from './Nav'
import Registerpage from "./Registerpage";
import Home from "./HomePage";
import Detail from "./Detail";

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

class App extends Component{
    render() {
        return(
            <Router>
            <div className="App">
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Registerpage}/>
                <Route path="/login" component={Login}/>
                <Route path="/post/:id" component={Detail}/>
            </div>
            </Router>

        )
    }
}

export default App;
