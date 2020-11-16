import React, {useState} from 'react';




function Details({name, region, temp, feels, wind, windSpeed}){

var [info, setInfo] = useState(false);

const developerInfo = () => {
    setInfo(!info)
  }


return(
<div className='info'>
<p onClick={developerInfo}>-Click for Developer Info Below-</p>
<p className={info ? 'visible' : 'visible:after'}>{info}</p>
<h2>{name} {region}</h2>
<h3>{"temperature: " + temp + '\xB0'}</h3>
<h3>{"feels like: " + feels + '\xB0'}</h3>
<h3>{"wind direction: " + wind}</h3>
<h3>{"wind speed: " + windSpeed + " mph"}</h3>
</div>
    )
}

export default Details;