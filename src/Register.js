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
import {AppContext} from './App';
import {Nav, Navbar} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import NavLink from "react-bootstrap/NavLink";
import MapApp from "./MapApp";

class Register extends Component {

    constructor()
    {
        super();

        this.state = {
            hideText: true
        }
        this.handleChange = this.handleChange.bind(this);

        this.alreadyRegistered = (
            <p >Ten mail jest już zarejestrowany!</p>
            );

    };

    handleChange(event)
    {
        this.setState({hideText: false});
    }

    render() {

        const style= this.state.hideText ? {display: 'none'} :{};
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

                    </Navbar.Collapse>
                </Navbar>

                <header className="masthead">

                    <div id = "marginTopStylIdMy" className="container_loginMy">
                        {/*<div className="container_login" style="margin-top: 10%">*/}
                        <div className="row_loginMy">
                            {/*<div>*/}
                            <div className="col-md-9 col-lg-8 mx-auto myHeader">
                                <h3 className="login-heading mb-4">Formularz rejestracyjny</h3>
                                <form method="post" onSubmit={this.pies}>

                                    <div className="form-label-group">
                                        <input type="text" id="inputName" className="form-control"
                                               placeholder="Imię" required autoFocus/>
                                        <label htmlFor="inputName">Imię</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="inputSurname" className="form-control"
                                               placeholder="Nazwisko" required autoFocus/>
                                        <label htmlFor="inputSurName">Nazwisko</label>
                                    </div>
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

                                    <button
                                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                        type="submit">
                                        Zarejestruj
                                    </button>
                                    <div className="App" style={style} id="textToShow">
                                        {this.alreadyRegistered}
                                    </div>
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

    pies = (e) =>
    {

        e.preventDefault();

        let nameValue = document.getElementById("inputName").value;
        let surnameValue = document.getElementById("inputSurname").value;
        let emailValue = document.getElementById("inputEmail").value;
        let passwordValue = document.getElementById("inputPassword").value;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://backendzpipwr.herokuapp.com/register',true);
        //xhr.open('POST', 'http://localhost:8083/register',true);
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.send(JSON.stringify({name:nameValue, username: surnameValue, password:passwordValue, email:emailValue}));
        xhr.onload = function () {
            if (xhr.status === 200) {
                localStorage.setItem('idUser',xhr.responseText);
                localStorage.setItem('isLogged', "true");
                window.open("/logged", "_self");
            } else {
                //window.open("/register", "_self");
            }
        };

        this.setState({hideText: false});



    }


}
Register.contextType = AppContext;
export default Register;


