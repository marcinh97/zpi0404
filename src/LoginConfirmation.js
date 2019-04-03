/* global gapi */
import React, { Component } from 'react';
import './App.css';
import './'
import './creative.css';
import './all.css';
import './all';
import './brands.css';
import './brands';
import './fontawesome.css';
import './fontawesome';
import './index.css';
import './magnific-popup.css';
import './regular.css';
import './regular';
import './solid.css';
import './svg-with-js.css';
import './v4-shims.css';
import './v4-shims';
import './solid';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {googleyolo} from 'react-googleyolo'
import App from './App';
import {AppContext} from './App';
import { Redirect } from 'react-router-dom'

class LoginConfirmation extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div className="LoginButton">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <meta name='google-signin-client_id'
                          content='545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'/>
                    <title>Charytatywni</title>
                    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet"
                          type="text/css"/>
                    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
                          rel="stylesheet"/>
                    <link
                        href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic'
                        rel='stylesheet' type='text/css'/>
                    <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet"/>

                    <link href="css/creative.min.css" rel="stylesheet"/>

                </head>
                <body id="page-top">

                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">Charytatywni.pl</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                <li className="nav-item">
                                    <Link to="/" classname="nav-link js-scroll-trigger">Strona główna</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="masthead">
                    <div id="marginTopStylId" className="container_login">
                        {/*<div className="container_login" style="margin-top: 10%">*/}
                        <div className="row_login">
                            <div className="col-md-9 col-lg-8 mx-auto">


                            </div>
                            <div className="text-center">
                                Do you want to continue with google?
                            </div>
                            <div id="g-signin2">

                            </div>
                        </div>
                    </div>
                </header>

                <footer className="bg-light py-5">
                    <div className="container">
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap oraz super
                            programistka frontu Ewa Łyko
                        </div>
                    </div>
                </footer>
                </body>
            </div>

        );


    }

    tryToLog() {
        gapi.auth2.init({
            client_id: '545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'
        }).then(function (authInstance) {

            gapi.load('auth2,signin2', function () {
                var auth2 = gapi.auth2.init();
            });
        });
    }

    pies() {

        gapi.auth2.init({
            client_id: '545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'
        }).then(function (authInstance) {

            gapi.load('auth2,signin2', function () {
                var auth2 = gapi.auth2.init();
                auth2.then(function () {
                    // Current values
                    var isSignedIn = auth2.isSignedIn;

                    if (!isSignedIn) {
                    } else {
                        var googleUser = authInstance.currentUser.get();
                        var id_token = googleUser.getAuthResponse().id_token;


                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', 'http://localhost:8080/try');
                        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                window.open("/logged", "_self");

                            } else {
                                console.error(xhr.statusText);
                            }
                        }

                        ;
                        xhr.send('idtoken=' + id_token);


                    }
                });
            });
        });
    }


    componentDidMount() {
        this.tryToLog();
        gapi.signin2.render('g-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 200,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onSuccess': () => this.pies()

        });


    }
}


LoginConfirmation.contextType = AppContext;
export default LoginConfirmation;

