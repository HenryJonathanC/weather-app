import React, { useState } from 'react'
import { UilSearch, UilLocationPoint} from '@iconscout/react-unicons'

const Inputs = ({setUnits, setQuery}) => {
  const [city, setCity] = useState('')

  const handleSearchClick= () => {
    if(city !== '') {
      setQuery({q: city})
      setCity('')
    }
  }

  const handleSearchPress = e =>{
    if(e.key === 'Enter' && city !== ''){
      setQuery({q: city})
      setCity('')
    } 
      
  }

  const handleLocationClick = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat= position.coords.latitude
        let lon= position.coords.longitude
        setQuery({
          lat,
          lon
        })
      })
    }
  }

  return (
    <div className='flex justify-around items-center my-4'>
        <div className='flex w-3/4 items-center justify-center space-x-4'>
            <input onKeyPress={handleSearchPress} value={city} onChange={e=> setCity(e.currentTarget.value)} type='text' className='text-l font-light p-2 w-full shadow-xl focus:outline-none capitalize' placeholder='Search...' />
        </div>
        <UilSearch onClick={handleSearchClick} size={25} className='text-white mx-1 cursor-pointer transition ease-out hover:scale-125' />
        <UilLocationPoint onClick={handleLocationClick} size={25} className='text-white mx-1 cursor-pointer transition ease-out hover:scale-125 '/>
        <div className='flex w-1/4 items-center justify-center'>
            <button onClick={()=> {setUnits({units : 'metric'})}} name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button onClick={()=> {setUnits({units : 'imperial'})}} name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125'>°F</button>
        </div>
    </div>
  )
}

export default Inputs