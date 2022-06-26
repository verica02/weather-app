import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'

function Forecast({title, items}) {
  return (
    <div className = 'mt-64'>

	<div className = 'flex items-center justify-start my-6'>

	<p className = 'text-white text-2xl uppercase'>{title}</p>

	</div>

	<hr className = 'my-4'/>
	<div className='flex flex-row items-center justify-between text-white'>
	{items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-xl">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="text-4xl">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}

	
	

	</div>

    </div>
  )
}

export default Forecast