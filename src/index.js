import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import LoginButton from './LoginButton';
import AfterLogging from "./AfterLogging";
import LoginConfirmation from "./LoginConfirmation";
import MapApp from "./MapApp";
import RegisterToPortal from "./Register";
const routing = (
    <Router>
    <div>
            <Route exact path="/" component={App} />
            <Route path="/logging" component={LoginButton} />
            <Route path="/logged" component = {AfterLogging}/>
            <Route path="/confirm" component = {LoginConfirmation}/>
            <Route path="/map" component = {MapApp}/>
            <Route path="/register" component ={RegisterToPortal}/>

    </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
