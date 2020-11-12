import React from 'react';

function Details({name, weather, region, country, temp, feels}){
    return(
        <div className='info'>
                <p>{"Location: " + name} {" Region: " + region} {" Country: " + country}</p>
                <p>{"Weather: " + weather} {" Temp: " + temp} {" Feels like: " + feels}</p>
                
        </div>
    )
}

export default Details;