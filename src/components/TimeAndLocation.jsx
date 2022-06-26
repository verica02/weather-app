import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {//destructuring
  return (
    <div>
	<div className = 'flex items-center justify-center my-6'>
		<p className = 'text-white text-2xl font-extralight'>{formatToLocalTime(dt, timezone)}</p>{/*fetches from aPI*/}
    	</div>
    	<div className = 'flex items-center justify-center my-3'>
		<p className = 'text-white text-4xl font-medium'>{`${name}, ${country}`}</p>
    	</div>
    
    	</div>
  )
}

export default TimeAndLocation