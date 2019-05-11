import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";
import React from "react"
import CityPin from './OfferPin';
import CityInfo from './SingleOffer';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoib3pvbmVsYXllcjk3IiwiYSI6ImNqdDc5YW9majAyZjU0NXBscjJkMXR2OHQifQ.aQH1Wz9_4MG4xcC6Wr4NbQ'
});

class MapManager extends React.Component{
    state={
        locations: [[]],
        vals: [],
        viewport: {
            latitude: 17.036956,
            longitude: 51.110694,
            zoom: 3.5,
            bearing: 0,
            pitch: 0
        },
        popupInfo: null,
        count: 0,
        checked: [],
        offerId: -1
    };


    constructor(props){
        super(props);
        this.state.locations = props.locations
        console.log("Locationz: " + props.locations)
        this.state.vals = this.state.locations.map(loc => [loc.Latitude, loc.Longitude]);
        this.state.vals.map(val => console.log("Sem tu: " + val))
        this.state.popupInfo = null
        this.myRef = React.createRef();
        this.layer = React.createRef();
        this.state.checked = props.checked;
    }
    _updateViewport = (viewport) => {
        this.setState({viewport});
    }

    componentWillReceiveProps(props){
        console.log("Otrzymalem " + props.checked)
        this.state.checked = props.checked
    }

    refreshMap = res => this.setState({checked: res.data.checked})

    _renderCityMarker = (place, index) => {
        this.state.checked.forEach(val => console.log("buzbuzbuzbzu " + val))
        console.log("--->Kategoria: " + this.getCategory(place));
        var kat = this.getCategory(place);
        if (kat === 1){
            if (!this.state.checked.includes("zabawki")){
                return;
            }
        }
        else{
            if (!this.state.checked.includes("jedzenie")){
                return;
            }
        }
        return (
            <Marker
                key={`marker-${index}`}
                coordinates={place} anchor="top">
                <CityPin category={this.getCategory(place)} size={20}
                         onClick={() => {
                             this.setState({popupInfo: [place, this.getDescription(place)]});
                             this.setState({offerId: this.getOfferId(place)})
                         }} />
            </Marker>
        );
    };

    getDescription(coordinates){
        const place = coordinates
        console.log("Current place: " + place)
        for (var i=0; i<this.state.locations.length; i++){
            if (this.state.locations[i].Latitude === place[0] && this.state.locations[i].Longitude === place[1]){
                console.log("************* " + this.state.locations[i].Description)
                return this.state.locations[i].Description;
            }
        }
        return "Not found u";
    }

    getOfferId(coordinates){
        const place = coordinates
        console.log("Current place: " + place)
        for (var i=0; i<this.state.locations.length; i++){
            if (this.state.locations[i].Latitude === place[0] && this.state.locations[i].Longitude === place[1]){
                console.log("&&&&&&&####### " + this.state.locations[i].id)
                return this.state.locations[i].id;
            }
        }
        return "Not found u";
    }

    getCategory(coordinates){
        const place = coordinates
        console.log("Current place: " + place)
        for (var i=0; i<this.state.locations.length; i++){
            if (this.state.locations[i].Latitude === place[0] && this.state.locations[i].Longitude === place[1]){
                console.log("************* " + this.state.locations[i].category)
                return this.state.locations[i].category;
            }
        }
        return 0;
    }

    _renderPopup() {
        if (this.state != null && this.state.popupInfo != null){
            //const {popupInfo} = this.state.popupInfo;
            const description = this.state.popupInfo[1];
            console.log("Hello in render popup: " + description)
            var offerId = this.state.offerId;
            var cityInfo = <CityInfo key={this.state.count} info={this.getDescription(this.state.popupInfo[0])} offerId={offerId}/>
            this.state.count++
            // cityInfo.stateSetter(description)
            return (
                <Popup tipSize={5}
                       anchor="top"
                       // coordinates={[this.state.popupInfo[0]]}
                        coordinates={this.state.popupInfo[0]}
                       // LngLatLike={this.state.popupInfo[0]}
                       // latitude={this.state.popupInfo[1]}
                       closeButton={true}
                       closeOnClick={true}
                    // closeOnClick={true}
                       // onClose={() => this.setState({popupInfo: null})}
                >
                    {cityInfo}
                    {offerId}
                </Popup>
            );
        }
    }


    _onClickMap(map, event){
        //console.log("Hiiiiiiiiiiiiii")
        //console.log(event.lngLat)v
        // window.document.getElementById("textInput").value = event.lngLat
        // window.document.getElementById("textInput").disabled = true
    }

    handleClick = (map, ev) => {
        console.log(ev.lngLat);
    }

    _createFilter(){

    }

    doSomething(checkedValues){
        console.log("I just did something!")
        checkedValues.forEach(value => console.log("-----> " + value))
        var layer = this.layer;
        console.log("bababaa:  " + layer)
    }

    componentDidMount(){
        var filterGroup = document.getElementById('mojaMapka');
        console.log("Ezekelemene " + this.layer)
        this.state.checked.forEach(value => console.log("--------------> " + value))
    }

    render(){
        // const popupLocations = this.state.locations;
        // console.log("AAAAAAAAA " + this.state);

        // Object.keys(this.state.locations).forEach(el => console.log("KUUU " + el));





        let locations = [];
        this.state.vals.map(val => locations.push([val[0], val[1]]));
        //const popupLocations = [[17.036956, 51.110694], [17.136956, 51.210694], [17.236956, 51.310694]];
        const popupLocations = locations;
        console.log(this.state.locations);

        /*
        // const popupLocations = this.state.locations.map(loc => <Popup coordinates={[loc.Latitude, loc.Longitude]}/>)
        // const markersToAdd = popupLocations.map(loc => <Marker/>);
        var iconsSources = ['food.png', 'kids.png', 'clothes.png'];
        var styles = []
        for (var i=0; i<popupLocations.length; i++){
            var urlAddress = "url('"+iconsSources[i%iconsSources.length]+"')";
            console.log("My url: " + urlAddress)
            styles.push({ backgroundImage: "url(./views/'"+iconsSources[i%iconsSources.length]+"')", color:'blue', height: '50px', width:'50px'});
            console.log("PPPPP " + styles[i].backgroundImage)
        }
        const mapMarkerStyle = {
            backgroundColor: 'blue',
            width: '1.5rem',
            height: '1.5rem',
            display: 'block',
            left: '-0.5rem',
            top: '-0.5rem',
            position: 'relative',
            borderRadius: '1.5rem 1.5rem 0',
            transform: 'rotate(45deg)',
            border: '1px solid #FFFFFF'
        }

        const markersToAdd = popupLocations.map((loc, index) =>
            <Marker coordinates={loc} anchor="bottom">
                <div style={mapMarkerStyle} />
            </Marker>);
        const popups = popupLocations.map((loc, index) =>
            <Popup coordinates={loc} style={styles[index]}>Hola que tal:</Popup>)
        for (var i=0; i<markersToAdd.length; i++){
            console.log(markersToAdd[i])
        }

        */

        return (
            <Map
                style="mapbox://styles/marcinhorak/cjvgz67wl00dv1drk7b71mcpx"
                ref={map => {this.map = map}}
                id={"mojaMapka"}
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}
                onDblClick={this._onClickMap}
                center={[17.036956, 51.110694]}>
                {/*{popups}*/}
                {popupLocations.map(this._renderCityMarker)}
                {this._renderPopup()}
                {/*{markersToAdd}*/}
                {this._createFilter()}
                <Layer
                    type="symbol"
                    id="marker"
                    ref={elem => {
                        console.log("Moj layer");
                        this.layer = elem;
                    }}
                    layout={{ "icon-image": "marker-15" }}>
                </Layer>
            </Map>
        )
    }
}

export default MapManager;