import React, {useEffect, useState} from 'react';
import {withScriptjs, withGoogleMap,GoogleMap,Marker,} from 'react-google-maps';
import darkMap from '../Darkmap';
import dayMap from '../Daymap';
import Details from './Details';

const dotenv = require('dotenv');
dotenv.config();

function Map(){
  var [lat, setLat] = useState(0);
  var [lon, setLon] = useState(0);
  var [Map, setMap] = useState(dayMap);
  const [name, setName] = useState([]);
  const [region, setRegion] = useState([]);
  const [country, setCountry] = useState([]);
  const [temp, setTemp] = useState([]);
  const [feels, setFeels] =useState([]);
  const [wind, setWind] = useState([]);
  const [windSpeed, setWindSpeed] = useState([]);
 
 
  

  const night = () => {
    setMap(Map = darkMap);
  }

  const day = () => {
    setMap(dayMap);
  }
  
  
//UseEffect will automatically get weather from API .
  
useEffect(() => {
  myLocation();
  }, [])




    //Map API_KEY and URL
    const MAP_API_KEY =`${process.env.REACT_APP_API_KEY}`;
    const URL_WITH_KEY = `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`

  // Weather API_KEY and URL  
    const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_KEY}`;
    const WEATHER_URL_AND_KEY = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}`;

    const myLocation = () =>  {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(lat = position.coords.latitude);
        setLon(lon = position.coords.longitude);
        getWeather();
        console.log(lat);
        console.log(lon);
      });
    }

      const getWeather = async () => {
        const w_response = await fetch(WEATHER_URL_AND_KEY);
        const w_data = await w_response.json();
        setName(w_data.location.name);
        setRegion(w_data.location.region);
        setCountry(w_data.location.country);
        setTemp(w_data.current.temp_f.toFixed(0));
        setFeels(w_data.current.feelslike_f.toFixed(0));
        setWind(w_data.current.wind_dir);
        setWindSpeed(w_data.current.wind_mph);
        console.log(w_data);
      }

    // generates google map
      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap defaultZoom={3.7} 
      options={{styles: Map}} 
      defaultCenter={{ lat: 38.7605, lng: -98.7818  }}>
      <Marker position={{lat: lat, lng: lon}}/>
      </GoogleMap>));
        

      

return (
    <div className='map'>
      <h1 className='title'>Hello World Weather</h1>
      <button onClick={day}>Day Map</button>
      <button onClick={night}>Night Map</button>
      <button onClick={myLocation}>My Weather</button>
      
      <Details name={name} 
      region={region} 
      country={country} 
      temp={temp}
      feels={feels}
      wind={wind}
      windSpeed={windSpeed}
      />
      
      <MapWithAMarker googleMapURL= {URL_WITH_KEY}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `500px` }} />}
      mapElement={<div style={{ height: `100%` }} />}/>
      </div>
  );
}


export default Map;
