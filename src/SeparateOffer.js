/* global gapi */
import React, { Component } from "react";
import {Nav, Navbar} from "react-bootstrap";
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import Slider from "react-slick";
import Popup from "reactjs-popup";
import ReactMapboxGl, {Layer} from "react-mapbox-gl";
import queryString from 'query-string'
import CityPin from "./OfferPin";
import Marker from "react-mapbox-gl/lib/marker";
import ReactDOM from "react-dom";

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoib3pvbmVsYXllcjk3IiwiYSI6ImNqdDc5YW9majAyZjU0NXBscjJkMXR2OHQifQ.aQH1Wz9_4MG4xcC6Wr4NbQ'
});
export default class SeparateOffer extends Component{

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

    componentDidMount(){
        onLoad();
        displayLogOut();
        displayMap();
        displayOffer();
        displayMyOffers();
        displayAllOffers();
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

        console.log("aaaxxxx " + this.state.data)

        var data = this.state.data;
        var numberOfPictures = data.length;
        for (var i=0; i<numberOfPictures; i++){
            console.log("Item: " + data[i].name)
        }
        var mainPicture;
        var otherPictures = [];
        var name = " ";
        var description = "";
        var status = 1;
        var longitude = 0;
        var latitude = 0;
        var category = 1;
        if (numberOfPictures > 0){
            mainPicture = data[0].url;
            name = data[0].name;
            description = data[0].description;
            status = data[0].status;
            longitude = data[0].Longitude;
            latitude = data[0].Latitude;
            category = data[0].categoryNum;
            if (numberOfPictures > 1){
                for (var i=1; i<numberOfPictures; i++){
                    otherPictures.push(data[i].url)
                }
            }
            else{
                otherPictures.push(mainPicture);
            }
        }
        otherPictures.forEach(val => console.log(val))
        var place = [latitude, longitude]
        return (
            <div className="LoginButton">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <meta name='google-signin-client_id'
                          content='545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'/>
                    <title>Hello right here</title>
                    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet"
                          type="text/css"/>
                    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
                          rel="stylesheet"/>
                    <link
                        href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic'
                        rel='stylesheet' type='text/css'/>
                    <link
                        href='mapstylesheet.css'
                        rel='stylesheet' type='text/css'/>
                    <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet"/>

                    <link href="css/creative.min.css" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </head>
                <body id="offerBody">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">CharytatywniRazem.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"/>
                        <Nav><div id="map_button"/></Nav>
                        <Nav><div id="all_offer_button"/></Nav>
                        <Nav><div id="offer_button"/></Nav>
                        <Nav><div id="my_offer_button"/></Nav>
                        <Nav>
                            <div id="log_in_out"/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div>
                    <div id="mainForm">
                        <div id={"leftSideContainer"}>
                            <div id="mainPicture" onDoubleClick={this.disableManageGlassIfEnabled.bind(this)}>
                                <img id="magnifyingGlass"
                                     src={require("./views/lupa.png")}
                                     onClick={this.manageGlass}
                                />
                                <img id="myMainPicture" ref={elem => this.mainPicture = elem} src={mainPicture} />
                            </div>
                            <div id="smallerPictures">
                                <Slider {...settings}>
                                    {otherPictures.map(source =>
                                        <div>
                                            <h3>
                                                <img src={source} onClick={this.changeMain}/>
                                            </h3>
                                        </div>)}
                                </Slider>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div id={"rightSideContainer"}>
                            <div id={"offerTitleContainer"}>
                                <h1 id={"offerName"}>{name}</h1>
                                <hr class="someClass" />
                                <div id={"anotherPopupContainer"}>
                                    <Popup trigger={<button id={"offerStatus"}>Status: {status === 1 ? "dostępne" : "nieaktywna"}</button>} position="right center" modal
                                           closeOnDocumentClick>
                                        <div>
                                            Long: {longitude}, lat: {latitude}
                                        </div>
                                        <div>
                                            Status to cos tam
                                        </div>
                                        <div>
                                            Status to cos tam
                                        </div>
                                    </Popup>
                                </div>

                                <div id={"descriptionContainer"}>
                                    {description}
                                    <div id={"moreButtons"}>
                                        <button className={"infoButton"}>asdasdasd</button>
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
                                        <Popup trigger={<button id={"showMapPopup"}>Zarezerwuj ofertę dla siebie</button>} position={"right center"}
                                               modal closeOnDocumentClick>
                                            Skontaktuj się ze sprzedającym w celu zarezerwowania oferty.
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                            <br/>

                            <div id={"popupContainer"}>

                            </div>
                        </div>
                    </div>

                </div>
                <div id={"hiddenMapContainer"}>
                    <h1>Oto kontener</h1>
                    {/*<Map id={"mojaMapa"} ref={this.myRef} locations={data} checked={["zabawki", "jedzenie"]}/>*/}
                </div>
                <footer className="footerMap">
                    <div className="container">
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki
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
    if(localStorage.getItem('isLogged')==='true') {
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
    if(localStorage.getItem('isLogged')==='true') {
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
    if(localStorage.getItem('isLogged')==='true') {
        ReactDOM.render(
            <div><Nav.Link id="myOfferId" onClick={goToMyOffers}>Moje oferty</Nav.Link></div>, document.getElementById("my_offer_button")
        )
        ;}
}