import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../WeatherService';

const TemperatureAndDetails = ({weather}) => {
  return (
    <>
        <div className='flex items-center justify-center py-2 text-xl text-cyan-300'>
            <p className='capitalize'>{weather.details}</p>
        </div>
        <div className='flex items-center justify-between text-white py-1'>
            <img src={iconUrlFromCode(weather.icon)} alt='weather_icon.png' className='w-20' />
            
            <p className='text-5xl'> {`${weather.temp.toFixed()}°`}</p>

            <div className='flex flex-col space-y-2'>
                <div className='flex flex-row font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className='mr-1' />
                    Real feel:
                    <span className='font-medium ml-1'>{`${weather.feels_like.toFixed()}°`}</span>
                </div>     
                <div className='flex flex-row font-light text-sm items-center justify-center'>
                <UilTear size={18} className='mr-1' />
                    Humidity:
                    <span className='font-medium ml-1'>{weather.humidity}%</span>
                </div> 
                <div className='flex flex-row font-light text-sm items-center justify-center'>
                <UilWind size={18} className='mr-1' />
                    Wind:
                    <span className='font-medium ml-1'>{`${weather.speed.toFixed()} km/h`}</span>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun size={18} className='mr-1' />
            <p className='font-light'>Rise :<span className='font-medium ml-1'> {formatToLocalTime(weather.sunrise, weather.timezone, 'hh:mm a')}</span></p>
            <p className='font-light'>|</p>
            <UilSunset size={18} className='mr-1' />
            <p className='font-light'>Set :<span className='font-medium ml-1'> {formatToLocalTime(weather.sunset, weather.timezone, 'hh:mm a')}</span></p>
            <p className='font-light'>|</p>
            <UilSun size={18} className='mr-1' />
            <p className='font-light'>High :<span className='font-medium ml-1'>{`${weather.temp_max.toFixed()}°`}</span></p>
            <p className='font-light'>|</p>
            <UilSun size={18} className='mr-1' />
            <p className='font-light'>Low :<span className='font-medium ml-1'>{`${weather.temp_min.toFixed()}°`}</span></p>
        </div>
    </>
  )
}

export default TemperatureAndDetails