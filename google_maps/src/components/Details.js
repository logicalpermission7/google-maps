import React from 'react';

function Details({name, region, weather, temp}){
    return(
        <div className='info'>
                <h2>{name} {region}</h2>
                <h3>{weather} {" Temp: " + temp + '\xB0'}</h3>
                
                
                    
        </div>
    )
}

export default Details;