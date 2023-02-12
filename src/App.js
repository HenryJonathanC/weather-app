import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData from './WeatherService';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery]= useState({q : 'Bangalore'})
  const [units, setUnits] = useState({units : 'metric'})
  const [weather, setWeather] = useState(null)

  useEffect(()=>{
    const fetchWeather = async() =>{
      const data = await getFormattedWeatherData({...query, ...units})
      console.log(data)
      setWeather(data)
  }

  fetchWeather()
  }, [query, units])

  const formatBackground = ()=> {

  }

  return (
    <div className="mx-auto max-w-screen-md mt-5 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
        {weather && (
          <>
              <TimeAndLocation weather={weather}/>
              <TemperatureAndDetails weather={weather}/>
          </>
        )}
        

    </div>
  );
}

export default App;
