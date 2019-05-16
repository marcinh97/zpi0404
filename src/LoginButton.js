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

    setRedirectRegister = () => {
        this.setState({
            redirectReg: true
        })
    }

    renderRedirectRegister = () => {
        if (this.state.redirectReg) {
            return <Redirect to='/register'/>
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
                    <Navbar.Brand href="/">Charytatywni.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        {/*<Nav>*/}
                            {/*<Nav.Link to="/" classname="nav-link js-scroll-trigger">Strona główna</Nav.Link>*/}
                        {/*</Nav>*/}

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

                                    {/*<div className="custom-control custom-checkbox mb-3">*/}
                                        {/*<input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                                        {/*<label className="custom-control-label" htmlFor="customCheck1">Zapamiętaj*/}
                                            {/*hasło</label>*/}
                                    {/*</div>*/}
                                    <button
                                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                        type="submit">Zaloguj sie
                                    </button>

                                    <div id="moje-buttonki">
                                        <div id="g-signin2"></div>
                                        <div id="leftbutton">
                                            <p className="fb connect">Zaloguj się</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        {/*<div className="btn btn-light btn-xl" >*/}
                                            {this.renderRedirectRegister()}
                                            <Nav.Link onClick={this.setRedirectRegister}>Nie masz konta? Zarejstruj się tutaj </Nav.Link>
                                    </div>
                                        {/*</div>*/}
                                        {/*<a className="small" href="#">Nie masz konta? Zarejstruj się tutaj</a></div>*/}

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
        var doRedirect = false;
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
                        xhr.open('POST', 'https://backendzpipwr.herokuapp.com/try');
                        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                localStorage.setItem('authToken', id_token);
                                // alert(id_token);
                                // alert("LOCAL" + localStorage.getItem('authToken'));
                                // doRedirect = true;

                                localStorage.setItem('isLogged', "true");
                                //window.open("/logged", "_self");
                                window.open("/", "_self");


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


    kot = (e) => {

        e.preventDefault();

        let emailValue = document.getElementById("inputEmail").value;
        let passwordValue = document.getElementById("inputPassword").value;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://backendzpipwr.herokuapp.com/tryLogin',true);
        //xhr.open('POST', 'http://localhost:8083/tryLogin',true);
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.send(JSON.stringify({password:passwordValue, email:emailValue}));
        xhr.onload = function () {
            if (xhr.status === 200) {
                localStorage.setItem('idUser',xhr.responseText);
                localStorage.setItem('isLogged', "true");
                //window.open("/logged", "_self");
                window.open("/", "_self");
            } else {
                window.open("/logging", "_self");
            }
        };

        return false;


    }


    componentDidMount() {
        this.tryToLog();
        gapi.signin2.render('g-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 225,
            'height': 50,
            'font-size': 16,
            // 'longtitle': true,
            'theme': 'dark',
            'onSuccess': () => this.pies()
        });
    }

}
LoginButton.contextType = AppContext;
export default LoginButton;


