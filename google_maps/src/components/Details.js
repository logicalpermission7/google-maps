import React from 'react';


function Details({name, region, temp, feels, wind, windSpeed}){
    return(
        <div className='info'>
            
                <h2>{name} {region}</h2>
                <h3>{"temperature: " + temp + '\xB0'}</h3>
                <h3>{"feels like: " + feels + '\xB0'}</h3>
                <h3>{"wind direction: " + wind}</h3>
                <h3>{"wind speed: " + windSpeed + " mph"}</h3>
                
                
                    
        </div>
    )
}

export default Details;