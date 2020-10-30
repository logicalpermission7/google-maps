import {withScriptjs, withGoogleMap,GoogleMap,Marker,} from 'react-google-maps';
import React from 'react';
import './App.css';
const dotenv = require('dotenv');

dotenv.config();




function App() {

  const API_KEY =`${process.env.REACT_APP_API_KEY}`
  const URL_WITH_KEY = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 36.55887395544204, lng: -87.4639293245037  }}>
    <Marker position={{ lat: 36.55887395544204, lng: -87.4639293245037 }}/>
    </GoogleMap>
    
    
  ));
  
  





  return (
    <div className='map'>
      <h1 className='title'>Hello World</h1>

      <MapWithAMarker googleMapURL= {URL_WITH_KEY}
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `500px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}/>
    </div>
  );
}

export default App;
