import React from 'react';

function Details({name, weather, temp, icon}){
    return(
        <div className='info'>
            
                <p>{weather}<img src={icon} alt=""></img> {" Temp: " + temp}</p>
                    
        </div>
    )
}

export default Details;