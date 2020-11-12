import React from 'react';

function Details({name, region, weather, temp, icon}){
    return(
        <div className='info'>
                <img src={icon} alt=""></img>
                <h2>{name} {region}</h2>
                <h3>{weather} {" Temp: " + temp + '\xB0'}</h3>
                
                
                    
        </div>
    )
}

export default Details;