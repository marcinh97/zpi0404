/* global gapi */
import React, {Component, ReactPropTypes as PropTypes} from 'react';
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
import {Redirect} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import mapa from './img/portfolio/fullsize/mapascreen.PNG'; // with import
import oferta from './img/portfolio/fullsize/ofertyscreen.PNG'; // with import
import block from './img/portfolio/fullsize/blockscreen.PNG'; // with import
import logowanie from './img/portfolio/fullsize/logowaniescreen.PNG'; // with import
import dodawanie from './img/portfolio/fullsize/dodawaniescreen.PNG'; // with import
import telefon from './img/portfolio/fullsize/app2.png'; // with import
import telefon2 from './img/portfolio/fullsize/app3.png'; // with import
import telefon3 from './img/portfolio/fullsize/app5.png'; // with import
import marcin from './img/team/marcin.jpg'; // with import
import ewa from './img/team/ewa.jpg'; // with import
import maciek from './img/team/maciek.jpg'; // with import
import maciekagata from './img/team/agatamaciek.jpg'; // with import
import agata from './img/team/agata.jpg'; // with import

class App extends Component {

    state = {
        redirect: false,
        redirectMap : false,
        redirectOffers: false,
    }
    constructor() {
        super();

    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    setRedirectMap = () => {
        this.setState({
            redirectMap: true
        })
    }

    setRedirectOffers = () => {
        this.setState({
            redirectOffers: true
        })
    }


    setRedirectRegister = () => {
        this.setState({
            redirectReg: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/logging'/>
        }
    }

    renderRedirectRegister = () => {
        if (this.state.redirectReg) {
            return <Redirect to='/register'/>
        }
    }
    renderRedirectMap = () => {
        if (this.state.redirectMap) {
            return <Redirect to='/map'/>
        }
    }

    renderRedirectOffers = () => {
        if (this.state.redirectOffers) {
            return <Redirect to='/all'/>
        }
    }

    renderLogout() {
        if(localStorage.getItem('isLogged')=='true') {
            return (
                <Nav.Link id="logOutId" onClick={signOut}>Wyloguj się</Nav.Link>
            );
        }
        else {

            return(
            <Nav.Link onClick={this.setRedirect}>Zaloguj się </Nav.Link>
        );
        }
    }

    renderContentMenu()
    {
        if(localStorage.getItem('isLogged')=='true') {
            return (
                <div>
                    <div>
                        <Nav.Link onClick={this.setRedirectMap}>Mapa </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link onClick={this.setRedirectOffers}>Oferty </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link id="logOutId" onClick={signOut}>Wyloguj się</Nav.Link>
                    </div>

                </div>
            );
        }
        else {

            return(
                <div>
                <div>
                <Nav.Link href="#about">O nas</Nav.Link>
                </div>
                <div>
                <Nav.Link href="#services">Funkcjonalności</Nav.Link>
                </div>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Kontakt</Nav.Link>
                    <Nav.Link onClick={this.setRedirectMap}>Mapa </Nav.Link>
                    <Nav.Link onClick={this.setRedirectOffers}>Oferty </Nav.Link>
                    <Nav.Link onClick={this.setRedirect}>Zaloguj się </Nav.Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="App">

                <body id="page-top">

                <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">CharytatywniRazem.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                                                         <Nav><div id="o_nas"></div></Nav>
                                                         <Nav><div id="dzialania"></div></Nav>
                                                         <Nav><div id="portfolio"></div></Nav>
                                                         <Nav><div id="kontakt"></div></Nav>
                                                         <Nav><div id="map_button"></div></Nav>
                                                        <Nav><div id="all_offer_button"></div></Nav>
                                                        <Nav><div id="offer_button"></div></Nav>
                                                   <Nav><div id="my_offer_button"></div></Nav>
                                                        <Nav>
                                                        <div id="log_in_out"></div>
                                                       </Nav>
                                                         {/*{this.renderContentMenu()}*/}
                                                         {/*<div>*/}
                                                     {/*{this.renderRedirectMap()}*/}
                                                         {/*<Nav.Link onClick={this.setRedirectMap}>Mapa </Nav.Link>*/}
                                                   {/*</div>*/}
                                                     {/*<div>*/}
                                                          {/*{this.renderRedirectOffers()}*/}
                                                           {/*<Nav.Link onClick={this.setRedirectOffers}>Oferty </Nav.Link>*/}
                                                       {/*</div>*/}
                                                     {/*<div>{ this.renderRedirect()}{this.renderLogout()}</div>*/}

                                                   </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-uppercase text-white font-weight-bold">Pomóż innym żyć pełnią
                                    życia</h1>
                                <hr className="divider my-4"/>
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 font-weight-light mb-5">Zarejestruj się aby móc dzielić się
                                    z
                                    bliźnimi</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Dowiedz się
                                    więcej</a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="page-section bg-primary" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">Jak powstała ta strona?</h2>
                                <hr className="divider light my-4"/>
                                <p className="text-white-50 mb-4">Projekt aplikacji webowej "CharytatywniRazem" powstał w reamach realizacji przedsięwzięcia
                                    na kursie Zespołowe Przedsięwzięcie Inżynierskie na Politechnice Wrocławskiej.
                                </p>
                                <p className="text-white-50 mb-4">
                                    Aplikacja wykorzystuje środowisko NodeJS od strony back-endowej oraz React od strony front-endowej.
                                </p>
                                <p className="text-white-50 mb-4">
                                    Baza danych produktów i użytkowników umieszczona jest w chmurze platformy Azure, zarządzana przez SZBD PostgreSQL.
                                </p>
                                <p className="text-white-50 mb-4">
                                    Dodatkowo aplikacja wykorzystuje technologię PWA (progressive web apps).
                                </p>
                                <p className="text-white-50 mb-4">
                                    Transakcja rezerwacji produktu z oferty oparta na smart contractach w technologii Ethereum blockchain
                                </p>
                                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Przyjrzyj się
                                    funkcjonalnościom!</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="services">
                    <div className="container">
                        <h2 className="text-center mt-0">Funkcjonalności</h2>
                        <hr className="divider my-4"/>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-utensils text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Dziel się z innymi</h3>
                                    <p className="text-muted mb-0">Dodawanie ofert różnych kategorii</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="far fa-4x fa-comment-alt text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Przeglądanie ofert</h3>
                                    <p className="text-muted mb-0">Przeglądanie wszystkich ofert oraz ofert użytkownika</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-globe-americas text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Mapa</h3>
                                    <p className="text-muted mb-0">Poszukiwanie ofert na mapie w celu szybszego zlokalizowania</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-sort-alpha-down text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Szybkie wyszukiwanie</h3>
                                    <p className="text-muted mb-0">Szybsze przeszukiwanie ofert dzięki filtrom</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fab fa-4x fa-google text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Łatwa rejestracja</h3>
                                    <p className="text-muted mb-0">Bezpośrednia rejestracja poprzez formularz lub z wykorzystaniem autoryzacji Google</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fab fa-4x fa-ethereum text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Ethereum blockchain</h3>
                                    <p className="text-muted mb-0">Rezerwuj oferty przy użyciu nowoczesnej technologii Ethereum blockchain</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">On-line i off-line</h3>
                                    <p className="text-muted mb-0">Korzystaj ze strony on-line oraz off-line</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-mobile text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Na każdym urządzeniu</h3>
                                    <p className="text-muted mb-0">Korzystaj ze strony bez względu na urządzienie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" id="img1">
                                    <img className="img-fluid"
                                         // src={"https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                         src={mapa}
                                         alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Mapa
                                        </div>
                                        <div className="project-name">
                                            Znajdź oferty na mapie
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" id="img1">
                                    <img className="img-fluid"
                                         //src={"https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
                                         src={oferta}/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Oferty
                                        </div>
                                        <div className="project-name">
                                            Przeglądaj dostępne oferty
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" id="img1">
                                    <img className="img-fluid"
                                         //src={"https://images.pexels.com/photos/34587/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                         src={logowanie}
                                         alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Logowanie
                                        </div>
                                        <div className="project-name">
                                            Zaloguj się przy użyciu Google
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" id="img1">
                                    <img className="img-fluid"
                                         //src={"https://images.pexels.com/photos/34753/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                         src={block}
                                         alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Ethereum blockchain
                                        </div>
                                        <div className="project-name">
                                            Rezerwuj oferty przy użyciu nowoczesnej technologii Ethereum blockchain
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" id="img1">
                                    <img className="img-fluid"
                                        //src={"https://images.pexels.com/photos/688017/pexels-photo-688017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                         src={dodawanie}
                                         alt=""/>
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">
                                            Dodawanie ofert
                                        </div>
                                        <div className="project-name">
                                            Dodawaj nowe oferty i dziel się z innymi
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" id="img1">
                                    <img className="img-fluid"
                                         //src={"https://images.pexels.com/photos/1122403/pexels-photo-1122403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                         src={telefon3}
                                         alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Aplikacja
                                        </div>
                                        <div className="project-name">
                                            Korzystaj ze strony jak z aplikacji
                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="bg-light page-section" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="text-center mt-0">Autorzy strony</h3>
                                <hr className="divider my-4"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team">
                                        <div className="pic"><img src={marcin} alt=""/></div>
                                        <h3 className="title">Marcin Horak</h3>
                                        <span className="post">Student PWr</span>
                                        <ul className="icon">
                                            <li><a href="https://www.facebook.com/marcin.horak" ><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/marcin-horak-a3887a15b/"><i  className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://github.com/marcinh97" ><i className="fab fa-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team">
                                        <div className="pic"><img src={ewa} alt=""/></div>
                                        <h3 className="title">Ewa Łyko</h3>
                                        <span className="post">Studentka PWr</span>
                                        <ul className="icon">
                                            <li><a href="https://www.facebook.com/ewa.lyko" ><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/ewa-%C5%82yko-a12081156/"><i  className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://github.com/effcixx/" ><i className="fab fa-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team">
                                        <div className="pic"><img src={agata} alt=""/></div>
                                        <h3 className="title">Agata Rychter</h3>
                                        <span className="post">Studentka PWr</span>
                                        <ul className="icon">
                                            <li><a href="https://www.facebook.com/agata.rychter.5" ><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/agata-rychter-0a710817a/" ><i  className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://github.com/agatarychter" ><i className="fab fa-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team">
                                        <div className="pic"><img src={maciek} alt=""/></div>
                                        <h3 className="title">Maciek Sinicki</h3>
                                        <span className="post">Student PWr</span>
                                        <ul className="icon">
                                            <li><a href="https://www.facebook.com/maciek.sinicki.5" ><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/maciej-sinicki-9b973b185/" ><i  className="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" ><i className="fab fa-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="page-section bg-dark text-white">
                    <div className="container text-center">
                        <h2 className="mb-4">Zainteresowany? Zarejestruj się już dziś!</h2>
                        <div className="btn btn-light btn-xl">
                            {this.renderRedirectRegister()}
                            <Nav.Link onClick={this.setRedirectRegister}>Zarejestuj się </Nav.Link>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="mt-0">Masz jakieś pytania?</h2>
                                <hr className="divider my-4"/>
                                <p className="text-muted mb-5">Skontaktuj się z nami, a rozwiejemy wszystkie
                                    wątpliwości</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center">
                                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                                <div>+48 784 140 958</div>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                <a className="d-block" href="mailto:contact@yourwebsite.com">charytatywni@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-light py-5">
                    <div className="container">
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki
                        </div>
                    </div>
                </footer>
                </body>
            </div>
        )
    };
        // render() {
    //     return (
    //         <div className="App">
    //             <body id="page-top">
    //                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //                     <Navbar.Brand href="/">Charytatywni.pl</Navbar.Brand>
    //                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //                     <Navbar.Collapse id="responsive-navbar-nav">
    //                         <Nav className="mr-auto"></Nav>
        //                         <Nav>
        //                             <Nav><div id="o_nas"></div></Nav>
        //                             <Nav><div id="dzialania"></div></Nav>
        //                             <Nav><div id="portfolio"></div></Nav>
        //                             <Nav><div id="kontakt"></div></Nav>
        //                             <Nav><div id="map_button"></div></Nav>
        //                             <Nav><div id="all_offer_button"></div></Nav>
        //                             <Nav><div id="offer_button"></div></Nav>
        //                             <Nav><div id="my_offer_button"></div></Nav>
        //                             <Nav>
        //                                 <div id="log_in_out"></div>
        //                             </Nav>
        //                                 {/*{this.renderContentMenu()}*/}
        //
        //                             {/*<div>*/}
        //                                 {/*{this.renderRedirectMap()}*/}
        //                                 {/*<Nav.Link onClick={this.setRedirectMap}>Mapa </Nav.Link>*/}
        //                             {/*</div>*/}
        //                             {/*<div>*/}
        //                                 {/*{this.renderRedirectOffers()}*/}
        //                                 {/*<Nav.Link onClick={this.setRedirectOffers}>Oferty </Nav.Link>*/}
        //                             {/*</div>*/}
        //                             {/*<div>{ this.renderRedirect()}{this.renderLogout()}</div>*/}
        //
        //
        //                         </Nav>
    //                     </Navbar.Collapse>
    //                 </Navbar>
    //
    //
    //             <header className="masthead">
    //                 <div className="container h-100">
    //                     <div className="row h-100 align-items-center justify-content-center text-center">
    //                         <div className="col-lg-10 align-self-end">
    //                             <h1 className="text-uppercase text-white font-weight-bold">Pomóż innym żyć pełnią
    //                                 życia</h1>
    //                             <hr className="divider my-4"/>
    //                         </div>
    //                         <div className="col-lg-8 align-self-baseline">
    //                             <p className="text-white-75 font-weight-light mb-5">Zarejestruj się aby móc dzielić się
    //                                 z
    //                                 bliźnimi</p>
    //                             <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Dowiedz się
    //                                 więcej</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </header>
    //
    //             <section className="page-section bg-primary" id="about">
    //                 <div className="container">
    //                     <div className="row justify-content-center">
    //                         <div className="col-lg-8 text-center">
    //                             <h2 className="text-white mt-0">Mamy wszystko czego potrzebujesz!</h2>
    //                             <hr className="divider light my-4"/>
    //                             <p className="text-white-50 mb-4">Nie wiesz co zrobić z niezjedzonym pożywieniem? Masz
    //                                 potrzebę niesienia pomocy?
    //                                 Może potrzebujesz pomocy? Dzięki tej stronie spełnisz swoje marzenia</p>
    //                             <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Przyjrzyj się
    //                                 naszym
    //                                 działaniom!</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             <section className="page-section" id="services">
    //                 <div className="container">
    //                     <h2 className="text-center mt-0">Działania</h2>
    //                     <hr className="divider my-4"/>
    //                     <div className="row">
    //                         <div className="col-lg-3 col-md-6 text-center">
    //                             <div className="mt-5">
    //                                 <i className="fas fa-4x fa-utensils text-primary mb-4"></i>
    //                                 <h3 className="h4 mb-2">Dziel się jedzeniem</h3>
    //                                 <p className="text-muted mb-0">Nie wyrzucaj jedzenia, oddaj innym</p>
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-3 col-md-6 text-center">
    //                             <div className="mt-5">
    //                                 <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
    //                                 <h3 className="h4 mb-2">On-line i off-line</h3>
    //                                 <p className="text-muted mb-0">Korzystaj ze strony on-line oraz offline</p>
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-3 col-md-6 text-center">
    //                             <div className="mt-5">
    //                                 <i className="fas fa-4x fa-globe text-primary mb-4"></i>
    //                                 <h3 className="h4 mb-2">W całej Polsce</h3>
    //                                 <p className="text-muted mb-0">Pomoc możesz nieść w każdym miejscu w Polsce!</p>
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-3 col-md-6 text-center">
    //                             <div className="mt-5">
    //                                 <i className="fas fa-4x fa-heart text-primary mb-4"></i>
    //                                 <h3 className="h4 mb-2">Zbieraj odznaczenia</h3>
    //                                 <p className="text-muted mb-0">Zbieraj odznaczenia super bohatera</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             <section id="portfolio">
    //                 <div className="container-fluid p-0">
    //                     <div className="row no-gutters">
    //                         <div className="col-lg-4 col-sm-6">
    //                             <a className="portfolio-box" href="img/portfolio/fullsize/jedzenie.jpg">
    //                                 <img className="img-fluid" src="img/portfolio/thumbnails/jedzenie.jpg" alt=""/>
    //                                 <div className="portfolio-box-caption">
    //                                     <div className="project-category text-white-50">
    //                                         Żywność
    //                                     </div>
    //                                     <div className="project-name">
    //                                         Podziel się jedzeniem
    //                                     </div>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-lg-4 col-sm-6">
    //                             <a className="portfolio-box" href="img/portfolio/fullsize/przyjazn.jpg">
    //                                 <img className="img-fluid" src="img/portfolio/thumbnails/przyjazn.jpg" alt=""/>
    //                                 <div className="portfolio-box-caption">
    //                                     <div className="project-category text-white-50">
    //                                         Znajomość
    //                                     </div>
    //                                     <div className="project-name">
    //                                         Nawiąż nowe znajomości
    //                                     </div>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-lg-4 col-sm-6">
    //                             <a className="portfolio-box" href="img/portfolio/fullsize/mapa.png">
    //                                 <img className="img-fluid" src="img/portfolio/thumbnails/mapa.png" alt=""/>
    //                                 <div className="portfolio-box-caption">
    //                                     <div className="project-category text-white-50">
    //                                         Mapa
    //                                     </div>
    //                                     <div className="project-name">
    //                                         Zaznacz gdzie chcesz pomagać
    //                                     </div>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-lg-4 col-sm-6">
    //                             <a className="portfolio-box" href="img/portfolio/fullsize/lupa.png">
    //                                 <img className="img-fluid" src="img/portfolio/thumbnails/lupa.png" alt=""/>
    //                                 <div className="portfolio-box-caption">
    //                                     <div className="project-category text-white-50">
    //                                         Pomoc
    //                                     </div>
    //                                     <div className="project-name">
    //                                         Znajdź pomoc dla siebie
    //                                     </div>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-lg-4 col-sm-6">
    //                             <a className="portfolio-box" href="img/portfolio/fullsize/wiadomosc.png">
    //                                 <img className="img-fluid" src="img/portfolio/thumbnails/wiadomosc.png" alt=""/>
    //                                 <div className="portfolio-box-caption">
    //                                     <div className="project-category text-white-50">
    //                                         Wiadomości
    //                                     </div>
    //                                     <div className="project-name">
    //                                         Rozmawaj ze swoim bliźnim
    //                                     </div>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                         <div className="col-lg-4 col-sm-6">
    //                             <a className="portfolio-box" href="img/portfolio/fullsize/odznaka.png">
    //                                 <img className="img-fluid" src="img/portfolio/thumbnails/odznaka.png" alt=""/>
    //                                 <div className="portfolio-box-caption p-3">
    //                                     <div className="project-category text-white-50">
    //                                         Nagrody
    //                                     </div>
    //                                     <div className="project-name">
    //                                         Zdobywaj odznaki za pomoc!
    //                                     </div>
    //                                 </div>
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             <section className="page-section bg-dark text-white">
    //                 <div className="container text-center">
    //                     <h2 className="mb-4">Zainteresowany? Zarejestruj się już dziś!</h2>
    //                     <div className="btn btn-light btn-xl" >
    //                         {this.renderRedirectRegister()}
    //                         <Nav.Link onClick={this.setRedirectRegister}>Zarejestuj się </Nav.Link>
    //                     </div>
    //                    {/* <button className="btn btn-light btn-xl" onClick='goToLogin' >Rejestracja</button>*/}
    //
    //                     {/*<a className="btn btn-light btn-xl" href="Logowanie.html">Rejestracja</a>*/}
    //                 </div>
    //             </section>
    //
    //             <section className="page-section" id="contact">
    //                 <div className="container">
    //                     <div className="row justify-content-center">
    //                         <div className="col-lg-8 text-center">
    //                             <h2 className="mt-0">Masz jakieś pytania?</h2>
    //                             <hr className="divider my-4"/>
    //                             <p className="text-muted mb-5">Skontaktuj się z nami, a rozwiejemy wszystkie
    //                                 wątpliwości</p>
    //                         </div>
    //                     </div>
    //                     {/*<div id ='googleComponent' className="g-signin2"></div>*/}
    //                     <div className="row">
    //                         <div className="col-lg-4 ml-auto text-center">
    //                             <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
    //                             <div>+48 784 140 958</div>
    //                         </div>
    //                         <div className="col-lg-4 mr-auto text-center">
    //                             <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
    //                             <a className="d-block" href="mailto:contact@yourwebsite.com">charytatywni@gmail.com</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //
    //             <footer className="bg-light py-5">
    //                 <div className="container">
    //                     <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap oraz super
    //                         programistka frontu Ewa Łyko
    //                     </div>
    //                 </div>
    //             </footer>
    //
    //             {/*<script type="text/javascript" src="javascript/googlelogin.js"></script>*/}
    //             {/*<script src="vendor/jquery/jquery.min.js"></script>*/}
    //             {/*<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>*/}
    //
    //             {/*<script src="vendor/jquery-easing/jquery.easing.min.js"></script>*/}
    //             {/*<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>*/}
    //
    //             {/*<script src="js/creative.min.js"></script>*/}
    //             </body>
    //         </div>
    //     );
    // }
    componentDidMount() {

        displayLogOut();
        displayMap();
        displayAddOffer();
        displayMyOffers();
        displayAllOffers();
        displayAboutUs();
        displayAboutServices();
        displayPortfolio();
        displayContact();

    }



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

function signOut() {
    localStorage.removeItem('isLogged');
    window.location.reload();
}

function SignIn() {
    window.open("/logging","_self");
}


function displayLogOut()
{
    if(localStorage.getItem('isLogged')=='true') {
        ReactDOM.render(
            <div><Nav.Link id="logOutId" onClick={signOut}>Wyloguj się</Nav.Link>
            </div>, document.getElementById("log_in_out")
        )
        ;
    }else{
        ReactDOM.render(
            <div><Nav.Link id="logOutId" onClick={SignIn}>Zaloguj się</Nav.Link>
            </div>, document.getElementById("log_in_out")
        )
        ;
    }
}

function displayMap()
{
    ReactDOM.render(
        <div><Nav.Link id="mapId" onClick={goToMap}>Mapa</Nav.Link></div>, document.getElementById("map_button")
    )
    ;
}
function displayAddOffer()
{
    if(localStorage.getItem('isLogged')=='true') {
    ReactDOM.render(
        <div><Nav.Link id="offerId" onClick={goToAddOffer}>Dodaj ofertę</Nav.Link></div>, document.getElementById("offer_button")
    )
    ;}
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
    if(localStorage.getItem('isLogged')=='true') {
    ReactDOM.render(
        <div><Nav.Link id="myOfferId" onClick={goToMyOffers}>Moje oferty</Nav.Link></div>, document.getElementById("my_offer_button")
    )
    ;}
}

function displayAboutUs()
{
    if(localStorage.getItem('isLogged')==null) {
        ReactDOM.render(
            <div><Nav.Link id="allOfferIdss" href="#about">O nas</Nav.Link></div>, document.getElementById("o_nas")
        )
        ;}
}
function displayAboutServices()
{
    if(localStorage.getItem('isLogged')==null) {
        ReactDOM.render(
            <div><Nav.Link id="servicesBut" href="#services">Działania</Nav.Link></div>, document.getElementById("dzialania")
        )
        ;}
}
function displayPortfolio()
{
    if(localStorage.getItem('isLogged')==null) {
        ReactDOM.render(
            <div><Nav.Link id="servicesButaaaa" href="#portfolio">Zdjęcia</Nav.Link></div>, document.getElementById("portfolio")
        )
        ;}
}

function displayContact()
{
    if(localStorage.getItem('isLogged')==null) {
        ReactDOM.render(
            <div><Nav.Link id="servicesButaa" href="#contact">Kontakt</Nav.Link></div>, document.getElementById("kontakt")
        )
        ;}
}


// function initSigninV2() {
// //
//     gapi.auth2.init({
//         client_id: '545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'
//     }).then(function (authInstance) {
//
//         gapi.load('auth2,signin2', function () {
//                     var auth2 = gapi.auth2.init();
//                     auth2.then(function () {
//                         // Current values
//                         var isSignedIn = auth2.isSignedIn.get();
//
//                         if (!isSignedIn) {
//                             // logged = false;
//                             // gapi.signin2.render('google-signin-button',{'onclick':App.onSignIn()});
//
//                         }
//                         else {
//                             // var googleUser = gapi.auth2.getAuthInstance().currentUser.get();
//                             // var id_token = googleUser.getAuthResponse().id_token;
//                             // var xhr = new XMLHttpRequest();
//                             //     xhr.open('POST', 'http://localhost:8080/try');
//                             //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//                             //     xhr.onload = function () {
//                             //         alert('Signed in as:' + xhr.responseText);
//                             //     };
//                             //     xhr.send('idtoken=' + id_token);
//                         }
//                     });
//             //     // gapi.signin2.render('g-signin2', {
//             //     //     'scope': 'https://www.googleapis.com/auth/plus.login',
//             //     //     'width': 200,
//             //     //     'height': 50,
//             //     //     'longtitle': true,
//             //     //     'theme': 'dark',
//             //     //     'onsuccess': App.onSignIn(gapi.auth2.getAuthInstance().currentUser.get())
//             //     // });
//         });
//     });
// }




export default App;
export const AppContext = React.createContext(
    false
);
