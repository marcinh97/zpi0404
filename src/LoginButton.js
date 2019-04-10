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
import {AppContext} from './App';
import { Redirect } from 'react-router-dom'
import {Nav, Navbar} from "react-bootstrap";

class LoginButton extends Component {

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/confirm'/>
        }
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
                    <link href="cssForLogin.css" rel="stylesheet"/>

                </head>
                <body id="page-top">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Charytatywni.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link to="/" classname="nav-link js-scroll-trigger">Strona główna</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <header className="masthead">
                    <div id = "marginTopStylId" className="container_login">
                        {/*<div className="container_login" style="margin-top: 10%">*/}
                        <div className="row_loginMy">
                            {/*<div>*/}
                            <div className="col-md-9 col-lg-8 mx-auto myHeader">
                                <h3 className="login-heading mb-4">Witaj ponownie!</h3>
                                <form method="post" onSubmit={this.kot}>
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control"
                                               placeholder="Adres email" required autoFocus/>
                                        <label htmlFor="inputEmail">Adres email</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control"
                                               placeholder="Hasło" required/>
                                        <label htmlFor="inputPassword">Hasło</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                        <label className="custom-control-label" htmlFor="customCheck1">Zapamiętaj
                                            hasło</label>
                                    </div>
                                    <button
                                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                        type="submit">Zaloguj sie
                                    </button>

                                    <div id="google-button-div"  >
                                        {this.renderRedirect()}
                                        <button type="button" className="google-button" onClick={this.setRedirect}>
                                              <span className="google-button__icon">
                                                <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path
                                                    d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                                                    id="Shape" fill="#EA4335"/><path
                                                    d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                                                    id="Shape" fill="#FBBC05"/><path
                                                    d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                                                    id="Shape" fill="#4285F4"/><path
                                                    d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                                                    fill="#34A853"/></svg>
                                              </span>
                                            <span className="google-button__text">Sign in with Google</span>
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="#">Zapomniałeś hasła?</a></div>

                                </form>
                            </div>
                        </div>
                    </div>
                </header>

                <footer className="bg-light py-5My">
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

    tryToLog()
    {
        gapi.auth2.init({
            client_id: '545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'
        }).then(function (authInstance) {

            gapi.load('auth2,signin2', function () {
                var auth2 = gapi.auth2.init();});
        });
    }

    pies() {

        gapi.auth2.init({
            client_id: '545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'
            // ,scope: 'https://www.googleapis.com/auth/cloud-platform'
        }).then(function (authInstance) {

            gapi.load('auth2,signin2', function () {
                var auth2 = gapi.auth2.init();
                auth2.then(function () {
                    var isSignedIn = auth2.isSignedIn;

                    if (!isSignedIn) {

                    } else {

                        window.open("/confirm","_self");
                    }
                });
            });
        });
    }


    kot = (e) => {

        e.preventDefault();

        let emailValue = document.getElementById("inputEmail").value;
        let passwordValue = document.getElementById("inputPassword").value;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://backendzpipwr.herokuapp.com/tryLogin');
        //xhr.open('POST', 'http://localhost:8083/tryLogin');
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.send(JSON.stringify({password:passwordValue, email:emailValue}));
        xhr.onload = function () {
            if (xhr.status === 200) {
                window.open("/logged", "_self");
            } else {
                window.open("/logging", "_self");
                //console.error(xhr.statusText);
            }
        };



    }


    // componentDidMount() {
    //     this.tryToLog();
    //     gapi.signin2.render('g-signin2', {
    //         'scope': 'https://www.googleapis.com/auth/plus.login',
    //         'width': 200,
    //         'height': 50,
    //         'longtitle': true,
    //         'theme': 'dark',
    //         'onSuccess': () => this.pies()
    //
    //     });
    // }
}
LoginButton.contextType = AppContext;
export default LoginButton;


