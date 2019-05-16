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
        formData.append('userId',"1");
        formData.append('name',document.getElementById('nameInput').value);
        formData.append('description',document.getElementById('descriptionInput').value);
        formData.append('category',category);
        formData.append('phone',document.getElementById('phoneInput').value);
        var list = this.state.selectedFiles;
        Array.prototype.forEach.call(list, function(file){ formData.append('fileItem', file,file.name)});
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/images',false);
        xhr.onload = function () {
            if (xhr.status === 200) {

                alert("Dodano nową ofertę");

            } else {
                console.error(xhr.statusText);
            }
        };
        xhr.send(formData);
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
                    <Navbar.Brand href="#home">Charytatywni.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link to="/" className="nav-link js-scroll-trigger">Strona główna</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <header className="masthead">
                        <div className="formDiv" id="formDiv">

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


}
AddItem.contextType = AppContext;
export default AddItem;
