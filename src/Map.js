import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import HospitalData from "./data/hospitals.json"
const AnyReactComponent = ({ text }) => <div>{text}</div>;


Geocode.setApiKey("AIzaSyDF7L5VjYPSZOIxc8bXTEjLtq6PiJvVb78");
Geocode.setLanguage("en");
Geocode.setRegion("us");


  

class SimpleMap extends Component {

    static defaultProps = {
      center: {
        lat: 40.7128,
        lng: -74.0060
      },
      zoom: 11
    };

    componentDidMount() {
        const {address} = this.props;

        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({center: { lat:lat, lng:lng}})
                console.log(lat, lng);
            },
             error => {
                console.error(error);
            }
        );
    }

    
   
    render() {
      const { address} = this.props
  
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyDF7L5VjYPSZOIxc8bXTEjLtq6PiJvVb78" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >

            {/*  {HospitalData.map(()=> {
                    <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
              })} */}

                    <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />    
            
          </GoogleMapReact>
        </div>
      );
    }
  }
   

export default SimpleMap;