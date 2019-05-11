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
import Table from "react-bootstrap/Table";


const axios = require('axios')
class UserOffers extends Component {

    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        redirect: false,
        countItems: 0,
    };

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

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 100000);
            this.setState({ intervalIsSet: interval });
        }
        onLoad();
        displayLogOut();
        displayMap();
        displayOffer();
        displayMyOffers();
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getDataFromDb = () => {

        fetch("https://backendzpipwr.herokuapp.com/userOffers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: localStorage.getItem('idUser'),
            }),
        }).then(data => data.json())
            .then(res => {console.log(res); this.setState({ data: res })});
    };


    renderTableData() {
        function getCatById(categoryNum) {
            return categoryNum==1 ? "Zabawki" : categoryNum ==2 ? "Jedzenie" : "Inne";
        }

        function getStatusByID(status) {
            return status==1 ? "Otwarta" : status ==2 ? "Zarezerwowana" : "Zamknięta";
        }

        return this.state.data.map((offer, index) => {
            const { offerid, name, description, categoryNum, status } = offer //destructuring
            var cat = getCatById(categoryNum);
            var statusTrans = getStatusByID(status);
            this.state.countItems++;
            return (
                <tr key={offerid}>
                    <td>{this.state.countItems}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{cat}</td>
                    <td>{statusTrans}</td>
                    <td><Nav.Link onClick={() => goToSingleOffer(offerid)}>Edycja i podgląd</Nav.Link></td>
                </tr>
            )
        })
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
                        <Nav className="mr-auto"></Nav>
                        <Nav><div id="map_button"></div></Nav>
                        <Nav><div id="offer_button"></div></Nav>
                        <Nav><div id="my_offer_button"></div></Nav>
                        <Nav>
                            <div id="log_in_out"></div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <header className="masthead">
                    <div id = "marginTopStylId" className="container_login">
                        {/*<div className="container_login" style="margin-top: 10%">*/}
                        <div className="row_loginMy">
                            {/*<div>*/}
                            <div className="col-md-9 col-lg-8 mx-auto myHeader">
                                {this.state.data.length <= 0 ? <p>Brak ofert lub poczekaj chwilę na załadowanie</p> :

                                <Table striped bordered hover variant="dark" tableCaption="Plain text header" >
                                    <caption>Moje oferty</caption>
                                    <thead>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa</th>
                                        <th>Opis</th>
                                        <th>Kategoria</th>
                                        <th>Status</th>
                                        <th>Przejrzyj szczegóły</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {this.renderTableData()}
                                    </tbody>
                                </Table>}
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

}


function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}


function signOut() {
    // gapi.auth2.init({
    //     client_id: '545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'
    // });
    // setter
    localStorage.removeItem('isLogged');
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( function () {
            window.open("/", "_self");
        }
    );

}

function goToSingleOffer(offerId) {
    window.open("/offer?id="+offerId,"_self");
}


function goToMap() {
    window.open("/map","_self");
}

function goToMyOffers() {
    window.open("/myOffers","_self");
}

function displayLogOut()
{
    ReactDOM.render(
        <div><Nav.Link id="logOutId" onClick={signOut}>Wyloguj się</Nav.Link></div>, document.getElementById("log_in_out")
    )
    ;
}

function displayMap()
{
    ReactDOM.render(
        <div><Nav.Link id="mapId" onClick={goToMap}>Mapa</Nav.Link></div>, document.getElementById("map_button")
    )
    ;
}
function displayOffer()
{
    ReactDOM.render(
        <div><Nav.Link id="offerId">Dodaj ofertę</Nav.Link></div>, document.getElementById("offer_button")
    )
    ;
}
function displayMyOffers()
{
    ReactDOM.render(
        <div><Nav.Link id="myOfferId" onClick={goToMyOffers}>Moje oferty</Nav.Link></div>, document.getElementById("my_offer_button")
    )
    ;
}
UserOffers.contextType = AppContext;
export default UserOffers;


