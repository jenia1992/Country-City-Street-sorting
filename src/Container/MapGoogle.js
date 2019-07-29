import React, { Component } from 'react';
import { connect } from "react-redux";
import * as  actionType from "../Store/action/Index"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapGoogle extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    // console.log(this.props.center)
    return (

      <Map style={this.props.style} google={this.props.google}
       initialCenter={{
        lat: 32.0853,
        lng: 34.7818
      }}
      center={this.props.center}
      onClick={this.onMarkerClick}
       zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                position={this.props.center}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCmaRkdRWNFozLcuoPrbORbRLoojhZp9Vc")
})(MapGoogle)

