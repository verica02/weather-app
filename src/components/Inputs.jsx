import React, {useState} from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Inputs({setQuery, units, setUnits}) {
  
	const [city, setCity] = useState("");

	const handleSearchClick = () => {
	if(city !== '') setQuery({q: city})
	}

	const handleLocationClick  = () => {
		if(navigator.geolocation) {

			toast.info('Fetching location...')

			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude
				let lon = position.coords.longitude
					toast.success('Location fetched!')
				setQuery({
					lat,
					lon
				})
			})
		}
	}
	
	const handleUnitsChange = (e) => {
	
	const selectedUnits = e.currentTarget.name
	if(units !== selectedUnits) setUnits(selectedUnits)
	
	}

	return (
    
	<div className = "flex flex-row justify-center my-6 mt-10 mb-16 ">
		<div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
		<input value = {city} onChange = {(e) => setCity(e.currentTarget.value)} type = 'text' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' placeholder='search for city...'  />
		<UilSearch size = {35} className = 'text-white cursor-pointer transition ease-out hover:scale-125' onClick = {handleSearchClick}/>
		<UilLocationPoint onClick = {handleLocationClick} size = {35} className = 'text-white cursor-pointer transition ease-out hover:scale-125'/>	
		</div>

		<div className = 'flex flex-row w-1/4 items-center justify-center'>
			<button name = "metric" className = 'text-3xl text-white font-light hover:scale-125 transition ease-out' onClick = {handleUnitsChange}>°C</button>
			<p className = 'text-xl text-white mx-1'>|</p>
			<button name = "imperial"className = 'text-3xl text-white font-light hover:scale-125 transition ease-out' onClick = {handleUnitsChange}>F</button>
		</div>
	</div>
  )
}

export default Inputs