import React, {useState} from 'react';
import {withScriptjs, withGoogleMap,GoogleMap,Marker,} from 'react-google-maps';
const dotenv = require('dotenv');
dotenv.config();

function Map(){
  var [lat, setLat] = useState(0);
  var [lon, setLon] = useState(0);

// useffect below will automatically render position by activating myLocation function    
   



  const API_KEY =`${process.env.REACT_APP_API_KEY}`
    const URL_WITH_KEY = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`

    const myLocation = () =>  {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(lat = position.coords.latitude);
          setLon(lon = position.coords.longitude);
          console.log(lat);
          console.log(lon);

        });
      }
      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap defaultZoom={4} defaultCenter={{ lat: 40.218733, lng: -100.330924  }}>
        <Marker position={{lat: lat, lng: lon}}/>
        </GoogleMap>));
        

      

return (
    <div className='map'>
      <button onClick={myLocation}>Find My Location</button>
      <MapWithAMarker googleMapURL= {URL_WITH_KEY}
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `500px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}/>  
    </div>
  );
}


export default Map;