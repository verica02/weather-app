import React from 'react'

function TemperatureAndDetails() {
  return (
    <div>

		<div className = 'flex items-center justify-center py-6 text-xl text-cyan-300'>

		<p>Cloudy</p>

		</div>
		<div className = " flex flex-row items-center justify-between text-white py0-3">
		<img src = 'http://openweathermap.org/img/wn/01d@2x.png' alt = "" className = "w-20"/>
		
		
		
		</div>

    </div>
  )
}

export default TemperatureAndDetails