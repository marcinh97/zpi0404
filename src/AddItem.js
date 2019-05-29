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
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state ={
            redirect: false,
            selectedFiles:[],
            category: "Kategoria"
        }
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

    setCategoryState = () =>
    {
        var dropdown = document.getElementById("categorySelect");
    }



    fileSelectedHandler = () => {
        this.setState({selectedFiles: document.getElementById('fileItem').files});
        var text="";
        var list = this.state.selectedFiles;
        document.getElementById('fake-btn').innerHTML="Liczba wybranych plików " + document.getElementById('fileItem').files.length;

    };

    sendPhoto()
    {
        var dropdown = document.getElementById("categorySelect");
        var category = dropdown.options[dropdown.selectedIndex].value;
        const formData = new FormData();
        formData.append('userId',localStorage.getItem('idUser'));
        formData.append('name',document.getElementById('nameInput').value);
        formData.append('description',document.getElementById('descriptionInput').value);
        formData.append('category',category);
        formData.append('phone',document.getElementById('phoneInput').value);
        var list = this.state.selectedFiles;
        Array.prototype.forEach.call(list, function(file){ formData.append('fileItem', file,file.name)});
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://backendzpipwr.herokuapp.com/images',false);
        //xhr.open('POST', 'http://localhost:8083/images',false);
        xhr.send(formData);
        xhr.onload = function () {
            if (xhr.status === 200) {
                window.open("/myOffers", "_self");
            } else {
                console.error(xhr.statusText);
            }
        };


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

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">CharytatywniRazem.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav><div id="map_button"></div></Nav>
                        <Nav><div id="all_offer_button"></div></Nav>
                        <Nav><div id="offer_button"></div></Nav>
                        <Nav><div id="my_offer_button"></div></Nav>
                        <Nav>
                            <div id="log_in_out"></div>
                        </Nav>
                        {/*<Nav>*/}
                            {/*<Nav.Link to="/" className="nav-link js-scroll-trigger">Strona główna</Nav.Link>*/}
                        {/*</Nav>*/}
                    </Navbar.Collapse>
                </Navbar>

                <header className="masthead">
                        <div className="formDiv">

                            <Form onSubmit={this.sendPhoto.bind(this)} enctype="multipart/form-data">
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Kategoria
                                    </Form.Label>
                                    <Col  sm={10}>
                                    <select id="categorySelect" name="categorySelect" onChange={this.setCategoryState.bind(this)}>Kategoria
                                        <option value="jedzenie">Jedzenie</option>
                                        <option value="zabawki">Zabawki</option>
                                        <option value="RTV/AGD">RTV/AGD</option>
                                        <option value="ubrania">Ubrania</option>
                                        <option value="akcesoria sportowe">Sport</option>
                                        <option value="meble">Meble</option>
                                    </select>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="nameControlId">
                                    <Form.Label column sm={2}>
                                        Nazwa
                                    </Form.Label>
                                    <Col  sm={10}>
                                        <Form.Control placeholder="Nazwa" id="nameInput" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="descrControlId">
                                    <Form.Label column sm={2}>
                                        Dodaj opis
                                    </Form.Label>
                                    <Col  sm={10}>
                                        <Form.Control placeholder="Opis" id="descriptionInput" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="contactControlId">
                                    <Form.Label column sm={2}>
                                        Telefon kontaktowy
                                    </Form.Label>
                                    <Col  sm={10}>
                                        <Form.Control placeholder="Telefon" id="phoneInput" />
                                    </Col>
                                </Form.Group>

                                <Form.Group>
                                    <div className="file-drop-area">
                                        <span className="fake-btn" id="fake-btn">Wybierz pliki lub upuść tutaj</span>
                                        <input className="file-input" type="file" id= "fileItem" multiple onChange={this.fileSelectedHandler} />
                                    </div>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm={{ span: 5, offset: 2 }}>
                                    </Col>
                                </Form.Group>
                                <div>
                                <Button  variant="primary" type="submit" id="offerSubmit">
                                    Dodaj ofertę
                                </Button>
                                </div>

                            </Form>
                        </div>
                </header>

                <footer className="bg-light py-5">
                    <div className="container">
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki
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

    componentDidMount()
    {

        onLoad();
        //getUserID();
        displayLogOut();
        displayMap();
        displayOffer();
        displayMyOffers();
        displayAllOffers();
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
    localStorage.removeItem('idUser');
    /*var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( function () {
            window.open("/", "_self");
        }
    );*/
    window.open("/",'_self');

}



function goToMap() {
    window.open("/map","_self");
}

function goToMyOffers() {
    window.open("/myOffers","_self");
}

function goToAllOffers() {
    window.open("/all","_self");
}

function goToAddOffer() {
    window.open("/additem","_self");
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
        <div><Nav.Link id="offerId" onClick={goToAddOffer}>Dodaj ofertę</Nav.Link></div>, document.getElementById("offer_button")
    )
    ;
}
function displayAllOffers()
{
    ReactDOM.render(
        <div><Nav.Link id="allOfferId" onClick={goToAllOffers}>Wszystkie oferty</Nav.Link></div>, document.getElementById("all_offer_button")
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

AddItem.contextType = AppContext;
export default AddItem;
