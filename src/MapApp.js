/* global gapi */
import React, { Component } from "react";
import ReactDOM from "react-dom"
import Map from './MapManager';
import {Nav, Navbar} from "react-bootstrap";
import './App.css'
import Spinner from 'react-spinner-material';

const axios = require('axios')

const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
};


class MapApp extends Component {

    // initialize our state
    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        langlat: null,
        categoryToAdd: null,
        checked: [],
        loadingMap: true
    };


    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.filterGroup = React.createRef();
        console.log("o chuj")
        this.state.checked = ["zabawki", "jedzenie"]
    }

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 100000);
            this.setState({ intervalIsSet: interval });
        }
            // this.myRef.current.capture().then((uri)=>{
            //     console.log("Sraka: "+ uri)
            // })
        var filters = this.filterGroup.current;
        console.log("Dupa: " + filters)
        this.state.checked.forEach(value => console.log("&&&&&&&&&& po: " + value))
        onLoad();
        displayLogOut();
        displayMap();
        displayOffer();
        displayMyOffers();
        displayAllOffers();
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    // just a note, here, in the front end, we use the id key of our data object
    // in order to identify which we want to Update or delete.
    // for our back end, we use the object id assigned by MongoDB to modify
    // data base entries

    // our first get method that uses our backend api to
    // fetch data from our data base
    getDataFromDb = () => {
        fetch("https://backendzpipwr.herokuapp.com/users")
            .then(data => data.json())
            .then(res => {console.log(res); this.setState({ data: res, loadingMap: false })});
        console.log("Fetched");
    };





    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = message => {
        console.log("Insert");
        console.log(message);

        axios.post("http://localhost:3001/addOffer", {
            langlat: 12312
            ,message: "kakababa"
        }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((res) => {
                console.log(`statusCode: ${res.message}`)
            })
            .catch((error) => {
                console.error(error)
            })
        // let currentIds = this.state.data.map(data => data.id);
        // let idToBeAdded = 0;
        // while (currentIds.includes(idToBeAdded)) {
        //     ++idToBeAdded;
        // }
        //
        // axios.post("http://localhost:3001/api/putData", {
        //     id: idToBeAdded,s
        //     message: message


        // });
    };


    // our delete method that uses our backend api
    // to remove existing database information
    deleteFromDB = idTodelete => {
        console.log("Deleted");
        //
        // let objIdToDelete = null;
        // this.state.data.forEach(dat => {
        //     if (dat.id == idTodelete) {
        //         objIdToDelete = dat._id;
        //     }
        // });
        //
        // axios.delete("http://localhost:3001/api/deleteData", {
        //     data: {
        //         id: objIdToDelete
        //     }
        // });
    };


    // our update method that uses our backend api
    // to overwrite existing data base information
    updateDB = (idToUpdate, updateToApply) => {
        console.log("Update");
        //
        // let objIdToUpdate = null;
        // this.state.data.forEach(dat => {
        //     if (dat.id == idToUpdate) {
        //         objIdToUpdate = dat._id;
        //     }
        // });
        //
        // axios.post("http://localhost:3001/api/updateData", {
        //     id: objIdToUpdate,
        //     update: { message: updateToApply }
        // });
    };

    addToDatabase(){
        console.log("Langlat: " + this.state.langlat)
        console.log("Cat: " + this.state.categoryToAdd)
    }

    change(){
        var divElement = this.refs.kontent;
        var checkBoxes = divElement.children;
        var listOfValues = [];
        for (var i=0; i<checkBoxes.length; i++){
            var input = checkBoxes[i].children[0];
            console.log("dziecko ----- " + input)
            var isChecked = input.checked;
            if (isChecked){
                listOfValues.push(checkBoxes[i].innerText)
            }
        }
        listOfValues.forEach(val => console.log("^^^^^^ " + val))
        this.state.checked = listOfValues;
        this.state.checked.forEach(value => console.log("haha: " + value))
        this.forceUpdate();
    }


    // here is our UI
    // it is easy to understand their functions when you
    // see them render into our screen
    render() {
        const { data } = this.state;
        const vals = this.state.data.length <= 0 ? [[]] : this.state.data;
        if (vals.length != 0){
            console.log("Juz : " + vals.length)
        }

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
                </head>
                <body id="page-top">

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

                {this.state.loadingMap ?
                    <div id="spinnerMap">
                        <Spinner size={200} spinnerColor={"#333"} spinnerWidth={2} visible={true}/>
                    </div> :

                    <header className="mapHeader">
                        <div>
                            <div>
                                {

                                    this.state.data.length <= 0
                                        ? ""
                                        :

                                        <div>
                                            <div id={"popup"} style={{
                                                color: "red",
                                                zIndex: 9999,
                                                fontSize: '2em'
                                            }}>
                                            </div>
                                            <div className={"mapContainer"}>
                                                <div id={"optionsMap"}>
                                                    <div className={"dropdown"}>
                                                        <div id={"optionsMapHeader"}>
                                                            Filtruj:
                                                        </div>
                                                        <div className="dropdown-content" ref={"kontent"}
                                                             onChange={event => {
                                                                 this.change()
                                                             }
                                                             }>
                                                            <div>
                                                                <input type={"text"} id={"searchOffers"}/>
                                                            </div>
                                                            <div><input type='checkbox'
                                                                        className='filter'
                                                                        name='filter' id='food'
                                                                        value='food'/><label
                                                                htmlFor='food'>Jedzenie</label></div>
                                                            <div><input type='checkbox'
                                                                        className='filter'
                                                                        name='filter' id='toys'
                                                                        value='toys'/><label
                                                                htmlFor='toys'>Zabawki</label></div>
                                                            <div><input type='checkbox'
                                                                        className='filter'
                                                                        name='filter' id='clothes'
                                                                        value='clothes'/><label
                                                                htmlFor='bar'>Ubrania</label></div>
                                                            <div><input type='checkbox'
                                                                        className='filter'
                                                                        name='filter' id='sport'
                                                                        value='sport'/><label
                                                                htmlFor='bar'>Sport</label></div>
                                                            <div><input type='checkbox'
                                                                        className='filter'
                                                                        name='filter' id='rtv'
                                                                        value='rtv'/><label
                                                                htmlFor='bar'>RTV/AGD</label></div>
                                                            <div><input type='checkbox'
                                                                        className='filter'
                                                                        name='filter' id='futniture'
                                                                        value='furniture'/><label
                                                                htmlFor='bar'>Meble</label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    {console.log("Kalarepka: " + this.state.checked)}
                                                    <Map id={"mojaMapa"} ref={this.myRef} locations={data}
                                                         checked={this.state.checked}/>
                                                </div>
                                            </div>
                                        </div>


                                }

                                <div style={{padding: "10px"}}>

                                </div>
                            </div>
                        </div>
                    </header>
                }
                <footer className="bg-light py-5My">

                    <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki

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

export default MapApp;