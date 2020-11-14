import React from 'react';

function Details({name, region, weather, temp, feels, wind, windSpeed}){
    return(
        <div className='info'>
                <h2>{name} {region}</h2>
                <h3>{weather}</h3>
                <h3>{"Temp: " + temp + '\xB0'}</h3>
                <h3>{"Feels like: " + feels + '\xB0'}</h3>
                <h3>{"Wind direction: " + wind}</h3>
                <h3>{"Wind Speed: " + windSpeed + " mph"}</h3>
                
                
                    
        </div>
    )
}

export default Details;