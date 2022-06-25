import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";
import './App.css';
import getFormattedWeatherData from "./services/weatherService";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import { useState, useEffect} from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

const [query, setQuery] = useState({q: 'berlin'})
const [units, setUnits] = useState('metric')
const [weather, setWeather] = useState(null)

//useEffect hook, to reload everytime a location or unit [query, units] changes
useEffect(() => {
//API call
  const fetchWeather = async() => {
  
    const message = query.q ? query.q : 'current location';
    toast.info('Fetching weather for ' + message)


    await getFormattedWeatherData({...query, units}).then((data) => {
      
      toast.success(`Successfully we fetched weather for ${data.name}, ${data.country} `)
      
      setWeather(data)
    });//this is the query
   
  }

  fetchWeather();
}, [query, units])





const formatBackground = () => {
  if(!weather) return 'from-cyan-700 to-blue-700'
  const threshold = units === 'metric' ? 20 : 60;
  if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'
  
  return 'from-yellow-700 to-orange-700'

}



  
  return (
    <div className = {`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
    <TopButtons setQuery = {setQuery} />
    <Inputs setQuery = {setQuery} units = {units} setUnits = {setUnits}/>

    {/*load this only if we have the weather data*/}

    {weather && (

      <div>
         <TimeAndLocation weather = {weather}/>
    <TemperatureAndDetails weather = {weather}/>
    <Forecast title = 'hourly forecast' items = {weather.hourly}/>
    <Forecast title = 'daily forecast' items = {weather.daily}/>
      </div>
    )}

    

      <ToastContainer autoClose = {5000} theme = 'colored' newestOnTop = {true} />
      </div>
    );
}

export default App;
