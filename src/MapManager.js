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
        count: 0
    };


    constructor(props){
        super(props);
        this.state.locations = props.locations
        console.log("Locationz: " + props.locations)
        this.state.vals = this.state.locations.map(loc => [loc.Latitude, loc.Longitude]);
        this.state.vals.map(val => console.log("Sem tu: " + val))
        this.state.popupInfo = null
    }
    _updateViewport = (viewport) => {
        this.setState({viewport});
    }

    _renderCityMarker = (place, index) => {
        return (
            <Marker
                key={`marker-${index}`}
                coordinates={place} anchor="top">
                <CityPin category={this.getCategory(place)} size={20}
                         onClick={() => this.setState({popupInfo: [place, this.getDescription(place)]})} />
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
            var cityInfo = <CityInfo key={this.state.count} info={this.getDescription(this.state.popupInfo[0])}/>
            this.state.count++
            // cityInfo.stateSetter(description)
            return (
                <Popup tipSize={5}
                       anchor="top"
                       // coordinates={[this.state.popupInfo[0]]}
                        coordinates={this.state.popupInfo[0]}
                       // LngLatLike={this.state.popupInfo[0]}
                       // latitude={this.state.popupInfo[1]}
                       closeOnClick={true}
                       onClose={() => this.setState({popupInfo: null})} >
                    {cityInfo}
                </Popup>
            );
        }
    }


    _onClickMap(map, event){
        //console.log("Hiiiiiiiiiiiiii")
        //console.log(event.lngLat)v
        window.document.getElementById("textInput").value = event.lngLat
        window.document.getElementById("textInput").disabled = true
    }

    handleClick = (map, ev) => {
        console.log(ev.lngLat);
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
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "90vh",
                    width: "90vw"
                }}
                onDblClick={this._onClickMap}
                center={[17.036956, 51.110694]}>
                {/*{popups}*/}
                {popupLocations.map(this._renderCityMarker)}
                {this._renderPopup()}
                {/*{markersToAdd}*/}
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[17.036956, 51.110694]}/>
                </Layer>
            </Map>
        )
    }
}

export default MapManager;