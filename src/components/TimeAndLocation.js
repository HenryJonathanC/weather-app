import React from 'react'
import { formatToLocalTime } from '../WeatherService'

const TimeAndLocation = ({weather}) => {
  return (
    <>
        <div className='flex items-center justify-center mt-1'>
            <p className='text-white text-xl font-extralight'>{formatToLocalTime(weather.dt, weather.timezone)}</p>
        </div>
        <div className='flex items-center justify-center mt-3'>
            <p className='text-white text-3xl font-medium'>{`${weather.name}, ${weather.country}`}</p>
        </div>
    </>
  )
}

export default TimeAndLocation