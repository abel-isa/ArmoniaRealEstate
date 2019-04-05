import {GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'



import {Map, InfoWindow, Marker,} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    address: ''
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    console.log("entra")
    const style = {
     
      width: '85%',
      height: '75%',
      marginLeft: '10px'
    }
    
    const {location, title} = this.props;
    
    return (<div>
       
      <Map google={this.props.google} initialCenter={{
        lat: location ? location.lat : 40.4401068 ,
        lng: location ? location.lng : -3.701612 
      }} zoom={14} style={style} onClick={this.onMapClicked}> 

        <Marker onClick={this.onMarkerClick}
                name={title || 'Tu cosa'} />

        <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>
          </div>
    );
  }
}

  export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo'
  })(MapContainer)



