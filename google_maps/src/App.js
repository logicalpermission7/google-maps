import React from 'react';
import {withScriptjs, withGoogleMap,GoogleMap,Marker,} from 'react-google-maps';
import './App.css';
const dotenv = require('dotenv');
dotenv.config();


function App() {

 

  const API_KEY =`${process.env.REACT_APP_API_KEY}`
  const URL_WITH_KEY = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`

  
  
  const myLocation = () =>  {
    navigator.geolocation.getCurrentPosition(function(position) {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;
      console.log(LAT);
      console.log(LON);
    });
  }

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 40.218733, lng: -100.330924  }}>
    <Marker position={{lat: 40.218733, lng: -100.330924}}/>
    </GoogleMap>));


  
  
  
  return (
    <div className='map'>


      <h1 className='title'>Hello World</h1>
      
      <button onClick={myLocation}>Find My Location</button>

      <MapWithAMarker googleMapURL= {URL_WITH_KEY}
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `500px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}/>
                     
    </div>
  );
}

export default App;
