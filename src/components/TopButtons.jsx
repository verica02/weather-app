import React from 'react'

function TopButtons({setQuery}) {

const cities = [
	{
		id:1,
		title:'London'
	},
	{
		id:2,
		title:'Sydney'
	},
	{
		id:3,
		title:'Tokyo'
	},
	{
		id:4,
		title:'Toronto'
	},
	{
		id:5,
		title:'Paris'
	}
]

  return (
    <div className = "flex flex-row justify-between items-center my-2 mb-6">
	{cities.map((city) => (
		<button key = {city.id} className = "text-white text-lg font-medium hover:bg-opacity-20 hover:bg-zinc-100 py-2 px-6" onClick={() => setQuery({q: city.title})}>{city.title}</button>
	))}
    </div>
  )
}

export default TopButtons