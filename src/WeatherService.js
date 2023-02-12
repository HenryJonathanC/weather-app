import { DateTime } from "luxon"

const API_KEY = '09ac762b09ea4728735c6738e286cb3a'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (infoType, searchParams) =>{
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY, units: searchParams.units})
    // console.log(url)
    return fetch(url)
        .then((res) => res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: { lon, lat},
        main: { temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: { country, sunrise, sunset},
        weather,
        wind: { speed},
        timezone
    } = data

    const { main: details, icon} = weather[0]

    return { lon, lat, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed, timezone}
}

const getFormattedWeatherData = async(searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather' , searchParams)
        // .then(console.log(searchParams))
        .then(formatCurrentWeather)

    return formattedCurrentWeather
}

const formatToLocalTime = (secs, zone, format="cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone/59).toFormat(format)

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export { formatToLocalTime, iconUrlFromCode }

export default getFormattedWeatherData