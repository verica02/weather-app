import React from 'react'

import {
	UilArrowUp,
	UilArrowDown,
	UilWind,
	UilTemperature,
	UilTear,
	UilSun,
	UilSunset
} from "@iconscout/react-unicons"
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'



function TemperatureAndDetails({weather: {//destructuring
	details, icon, temp, temp_min, temp_max, speed, humidity,feels_like, timezone, sunrise, sunset
}}) {
  return (
    <div className='mt-4'>

		<div className = 'flex items-center justify-center py-6 text-3xl text-cyan-300 '>
		
		
		
		</div>
		

		<div className = " flex flex-row items-center justify-between text-white py-3">
		<img src = {iconUrlFromCode(icon)} alt = "" className = "w-40"/>
		
		<div className = 'flex flex-col items-center'>
		<p className = 'text-8xl mb-4' >{`${temp.toFixed()}°`}</p>
		<p >{details}</p>	
		</div>
		

		<div className = 'flex flex-col space-y-2'>

		<div className = 'flex font-light text-md items-center justify-center'>
		<UilTemperature size = {38} className = 'mr-1'/>
		Real feel:
		<span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
		</div>

		
		<div className = 'flex font-light text-md items-center justify-center'>
		<UilTear size = {38} className = 'mr-1'/>
		Humidity:
		<span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
		</div>

		
		<div className = 'flex font-light text-md items-center justify-center'>
		<UilWind size = {38} className = 'mr-1'/>
		Wind:
		<span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
		</div>
		</div>
		</div>

		<div className = "flex flex-row items-center justify-center space-x-2 text-white text-md py-3">

			<UilSun  size = {38}/>
			<p className = 'font-light'>Rise: <span className = 'font-medium ml-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span></p>
			<p className = 'font-light'></p>

			<UilSunset size = {38} />
			<p className = 'font-light'>Set: <span className = 'font-medium ml-1'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span></p>
			<p className = 'font-light'></p>

			<UilArrowUp  size = {38}/>
			<p className = 'font-light'>High: <span className = 'font-medium ml-1'>{`${temp_max.toFixed()}°`}</span></p>
			<p className = 'font-light'></p>

			<UilArrowDown  size = {38}/>
			<p className = 'font-light'>Low: <span className = 'font-medium ml-1'>{`${temp_min.toFixed()}°`}</span></p>
			<p className = 'font-light'></p>
		</div>

    </div>
  )
}

export default TemperatureAndDetails