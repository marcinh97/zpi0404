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
import queryString from "query-string";
import Carousel from "react-bootstrap/Carousel";
import Popup from "reactjs-popup";
import ReactMapboxGl from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoib3pvbmVsYXllcjk3IiwiYSI6ImNqdDc5YW9majAyZjU0NXBscjJkMXR2OHQifQ.aQH1Wz9_4MG4xcC6Wr4NbQ'
});

class SeparateOfferNew extends Component {



    state={
        isGlassShown:false,
        offerId: -1,
        data: ""
    };

    constructor(props){
        super(props);
        this.manageGlass = this.manageGlass.bind(this)
        this.changeMain = this.changeMain.bind(this)
        this.mainPicture = React.createRef()
        const value=queryString.parse(this.props.location.search);

        this.state.offerId = value;
        this.getDataFromDb()
    }


    manageGlass(ev){
        var isShown = this.state.isGlassShown
        if (!isShown){
            this.state.isGlassShown = true;
            this.magnify(ev.target.parentNode.lastChild, 3);
        }
        else{
            var element = ev.target.parentNode.childNodes[1];
            element.parentNode.removeChild(element);
            this.state.isGlassShown = false;
        }
    }

    disableManageGlassIfEnabled(ev){
        if (this.state.isGlassShown){
            console.log(ev.target)
            ev.target.parentNode.removeChild(ev.target.parentNode.childNodes[1])
            this.state.isGlassShown = false;
        }
    }

    magnify(element, zoom){
        var img, glass, w, h, bw;
        img = element;

        /* Create magnifier glass: */
        glass = document.createElement("DIV");
        glass.setAttribute("class", "img-magnifier-glass");
        glass.setAttribute("id", "lupa-id")


        /* Insert magnifier glass: */
        img.parentElement.insertBefore(glass, img);

        /* Set background properties for the magnifier glass: */
        glass.style.backgroundImage = "url('" + img.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        /* Execute a function when someone moves the magnifier glass over the image: */
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);

        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);
        function moveMagnifier(e) {
            var pos, x, y;
            /* Prevent any other actions that may occur when moving over the image */
            //e.preventDefault();
            /* Get the cursor's x and y positions: */
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            /* Prevent the magnifier glass from being positioned outside the image: */
            if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
            if (x < w / zoom) {x = w / zoom;}
            if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
            if (y < h / zoom) {y = h / zoom;}
            /* Set the position of the magnifier glass: */
            glass.style.left = (x - w) + "px";
            glass.style.top = (y - h) + "px";
            /* Display what the magnifier glass "sees": */
            glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }

        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /* Get the x and y positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x and y coordinates, relative to the image: */
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x : x, y : y};
        }
    }

    changeMain(e){
        // console.log("Jestem o tu: " + this.mainPicture.currentSrc + ", " + e.target.src)
        this.mainPicture.src = e.target.src;
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
        displayAllOffers();
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }


    getDataFromDb = () => {

        fetch("https://backendzpipwr.herokuapp.com/allOffers", {
            //fetch("http://localhost:8083/allOffers", {
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



    getDataFromDb = () => {
        var id = this.state.offerId.id;
        fetch("https://backendzpipwr.herokuapp.com/offer?id="+id)
            .then(data => data.json())
            .then(res => {console.log("ssss " + res); this.setState({data: res})});
    };




    render() {

        var settings = {
            focusOnSelect: true,
            dots: true,
            // infinite: false,
            // speed: 500,
            // slidesToShow: 3,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            // centerPadding: "60px",
            slidesToShow: 3,
            swipeToSlide: true,
            speed: 500
        };

        var data = this.state.data;
        var numberOfPictures = data.length;
        for (var i=0; i<numberOfPictures; i++){
            console.log("Item: " + data[i].name)
        }
        var mainPicture;
        var otherPictures = [];
        var allPictures = [];
        var name = " ";
        var description = "";
        var status = 1;
        var longitude = 0;
        var latitude = 0;
        var category = 1;
        var categoryName = getCatById(category);
        var phone = " ";
        var statusName = getStatusByID(status);
        if (numberOfPictures > 0){
            mainPicture = data[0].url;
            name = data[0].name;
            description = data[0].description;
            status = data[0].status;
            longitude = data[0].Longitude;
            latitude = data[0].Latitude;
            category = data[0].categoryNum;
            categoryName = getCatById(category);
            phone = data[0].phone;
            statusName = getStatusByID(status);
            allPictures.push(mainPicture);
            if (numberOfPictures > 1){
                for (var i=1; i<numberOfPictures; i++){
                    otherPictures.push(data[i].url)
                    allPictures.push(data[i].url)
                }
            }
            /*else{
                otherPictures.push(mainPicture);
            }*/
        }
        otherPictures.forEach(val => console.log(val))
        var place = [latitude, longitude]

        return (

            <div>


                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <title>Shop Homepage - Start Bootstrap Template</title>
                    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="css/shop-homepage.css" rel="stylesheet"/>
                    <link rel="stylesheet" href="carousel.css"/>
                </head>

                <body className="back">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">CharytatywniRazem.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav className="mr-auto"></Nav>
                        <Nav><div id="map_button"></div></Nav>
                        <Nav><div id="all_offer_button"></div></Nav>
                        <Nav><div id="offer_button"></div></Nav>
                        <Nav><div id="my_offer_button"></div></Nav>
                        <Nav>
                            <div id="log_in_out"></div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <section className="home_banner_area">
                    <div className="container box_1620">
                        <div className="banner_inner d-flex align-items-center">
                            <div className="banner_content">
                                <div className="media">
                                    <div className="d-flex">
                                        <Carousel showArrows={true}>
                                            {/*<div>*/}
                                                {/*<img id="myMainPicture" ref={elem => this.mainPicture = elem} src={mainPicture} />*/}
                                            {/*</div>*/}
                                            {/*{otherPictures.map(source =>*/}
                                                {/*<div>*/}

                                                        {/*<img src={source} onClick={this.changeMain}/>*/}
                                                {/*</div>)}*/}
                                            {allPictures.map(source =>
                                            <div>

                                            <img src={source}/>
                                            </div>)}

                                        </Carousel>

                                    </div>
                                    <div className="media-body">
                                        <div className="personal_text">

                                            <h3>{name}</h3>
                                            <h4>{categoryName}</h4>
                                            <p>{description}</p>
                                            <p><i class="fas fa-phone"></i>
                                                {phone} </p>
                                            <p> Status ofety: {statusName}</p>

                                            <Popup trigger={<button className={"infoButton"}> Pokaż na mapie</button>} position="right center" modal
                                                   closeOnDocumentClick>
                                                <Map
                                                    style="mapbox://styles/marcinhorak/cjvgz67wl00dv1drk7b71mcpx"
                                                    containerStyle={{
                                                        height: "45vh",
                                                        width: "10  0vh"
                                                    }}
                                                    center={[17.036956, 51.110694]}
                                                >
                                                </Map>
                                            </Popup>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-light py-5My">
                    <div className="container">
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki
                        </div>
                    </div>
                </footer>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

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
function SignIn() {
    window.open("/logging","_self");
}
function displayLogOut()
{
    if(localStorage.getItem('isLogged')=='true') {
        ReactDOM.render(
            <div><Nav.Link id="logOutId" onClick={signOut}>Wyloguj się</Nav.Link></div>, document.getElementById("log_in_out")
        )
        ;}
    else{
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
function displayOffer()
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

function getCatById(categoryNum) {
    return categoryNum===1 ? "Zabawki" : categoryNum ===2 ? "Jedzenie" : "Inne";
}


function getStatusByID(status) {
    return status===1 ? "Otwarta" : status ===2 ? "Zarezerwowana" : "Zamknięta";
}


SeparateOfferNew.contextType = AppContext;
export default SeparateOfferNew;
