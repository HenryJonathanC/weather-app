import React from 'react'

const TopButtons = ({ setQuery }) => {

    const cities = [
        {
            id:1,
            title: 'Mumbai'
        },
        {
            id:2,
            title: 'Bangalore'
        },
        {
            id:3,
            title: 'London'
        },
        {
            id:4,
            title: 'New York'
        },
        {
            id:5,
            title: 'Mexico City'
        }
    ]
  return (
    <div className='flex items-center justify-between my-2'>
        {cities.map((city)=>(
            <button onClick={()=> {setQuery({q : city.title})}} key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons
