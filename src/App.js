import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";
import './App.css';
import getFormattedWeatherData from "./services/weatherService";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import { useState, useEffect} from "react";
import './button.scss';
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
  const threshold1 = units === 'metric' ? 10 : 50;
  const threshold2 = units === 'metric' ? 30 : 70;
 if(weather.temp <= threshold1) return 'from-cyan-200 to-blue-500'
  else if(weather.temp <= threshold) return 'from-lime-300  to-blue-500'
  else if(weather.temp >= threshold2) return 'from-orange-400 to-red-700'
  return 'from-yellow-300 to-orange-600' 

}

  
  return (

    <div className = {`mx-auto max-w-screen my-0 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-700 ${formatBackground()}`}>
    


    <TopButtons setQuery = {setQuery} />
    <Inputs setQuery = {setQuery} units = {units} setUnits = {setUnits}/>

    {/*load this only if we have the weather data*/}

    {weather && (

      <div>
         <TimeAndLocation weather = {weather}/>
    <TemperatureAndDetails weather = {weather}/>

        <div class="container">
            <div class="content">
              <svg id="more-arrows">
                <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
              </svg>
            </div>
          </div>

    <Forecast title = 'hourly forecast' items = {weather.hourly}/>
    <Forecast title = 'daily forecast' items = {weather.daily}/>
      </div>
    )}

      

      <ToastContainer autoClose = {5000} theme = 'colored' newestOnTop = {true} />
      </div>
    );
}

export default App;
