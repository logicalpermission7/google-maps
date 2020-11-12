import React from 'react';

function Details({weather, temp, icon}){
    return(
        <div className='info'>
            
                <h3>{weather}<img src={icon} alt=""></img> {" Temp: " + temp + '9\xB0'}</h3>
                    
        </div>
    )
}

export default Details;