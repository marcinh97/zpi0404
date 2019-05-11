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

class App extends Component {

    state = {
        redirect: false,
        redirectMap : false
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

    render() {
        return (
            <div className="App">
                <body id="page-top">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Charytatywni.pl</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"></Nav>
                            <Nav>
                                <Nav.Link href="#about">O nas</Nav.Link>
                                <Nav.Link href="#services">Działania</Nav.Link>
                                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#contact">Kontakt</Nav.Link>
                                <div>
                                    {this.renderRedirectMap()}
                                    <Nav.Link onClick={this.setRedirectMap}>Mapa </Nav.Link>
                                </div>
                                <div>{ this.renderRedirect()}{this.renderLogout()}</div>


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
                                <h2 className="text-white mt-0">Mamy wszystko czego potrzebujesz!</h2>
                                <hr className="divider light my-4"/>
                                <p className="text-white-50 mb-4">Nie wiesz co zrobić z niezjedzonym pożywieniem? Masz
                                    potrzebę niesienia pomocy?
                                    Może potrzebujesz pomocy? Dzięki tej stronie spełnisz swoje marzenia</p>
                                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Przyjrzyj się
                                    naszym
                                    działaniom!</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="services">
                    <div className="container">
                        <h2 className="text-center mt-0">Działania</h2>
                        <hr className="divider my-4"/>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-utensils text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Dziel się jedzeniem</h3>
                                    <p className="text-muted mb-0">Nie wyrzucaj jedzenia, oddaj innym</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">On-line i off-line</h3>
                                    <p className="text-muted mb-0">Korzystaj ze strony on-line oraz offline</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">W całej Polsce</h3>
                                    <p className="text-muted mb-0">Pomoc możesz nieść w każdym miejscu w Polsce!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Zbieraj odznaczenia</h3>
                                    <p className="text-muted mb-0">Zbieraj odznaczenia super bohatera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/jedzenie.jpg">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/jedzenie.jpg" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Żywność
                                        </div>
                                        <div className="project-name">
                                            Podziel się jedzeniem
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/przyjazn.jpg">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/przyjazn.jpg" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Znajomość
                                        </div>
                                        <div className="project-name">
                                            Nawiąż nowe znajomości
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/mapa.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/mapa.png" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Mapa
                                        </div>
                                        <div className="project-name">
                                            Zaznacz gdzie chcesz pomagać
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/lupa.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/lupa.png" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Pomoc
                                        </div>
                                        <div className="project-name">
                                            Znajdź pomoc dla siebie
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/wiadomosc.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/wiadomosc.png" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Wiadomości
                                        </div>
                                        <div className="project-name">
                                            Rozmawaj ze swoim bliźnim
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/odznaka.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/odznaka.png" alt=""/>
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">
                                            Nagrody
                                        </div>
                                        <div className="project-name">
                                            Zdobywaj odznaki za pomoc!
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section bg-dark text-white">
                    <div className="container text-center">
                        <h2 className="mb-4">Zainteresowany? Zarejestruj się już dziś!</h2>
                        <div className="btn btn-light btn-xl" >
                            {this.renderRedirectRegister()}
                            <Nav.Link onClick={this.setRedirectRegister}>Zarejestuj się </Nav.Link>
                        </div>
                       {/* <button className="btn btn-light btn-xl" onClick='goToLogin' >Rejestracja</button>*/}

                        {/*<a className="btn btn-light btn-xl" href="Logowanie.html">Rejestracja</a>*/}
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
                        {/*<div id ='googleComponent' className="g-signin2"></div>*/}
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
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap oraz super
                            programistka frontu Ewa Łyko
                        </div>
                    </div>
                </footer>

                {/*<script type="text/javascript" src="javascript/googlelogin.js"></script>*/}
                {/*<script src="vendor/jquery/jquery.min.js"></script>*/}
                {/*<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>*/}

                {/*<script src="vendor/jquery-easing/jquery.easing.min.js"></script>*/}
                {/*<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>*/}

                {/*<script src="js/creative.min.js"></script>*/}
                </body>
            </div>
        );
    }
    componentDidMount()
    {
        // displayLogIn();
    }



}

function signOut() {
    localStorage.removeItem('isLogged');

    window.location.reload();
}
function displayLogOut()
{
    ReactDOM.render(
        <div><Nav.Link id="logOutId" onClick={signOut}>Sign out</Nav.Link></div>, document.getElementById("log_in_out")
    )
    ;
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
