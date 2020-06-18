import React, { useState } from 'react';
import './App.css';
import TodaysForecast from './TodaysForecast'
import WeatherApi from './util/weatherApi';
require('dotenv').config()


function App() {
  const [mariettaWeather, setMariettaWeather] = useState('')

  const findWeather = () => {
    console.log(WeatherApi.getSummary())
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <h1>{mariettaWeather}</h1>
        <button onClick={findWeather}>{mariettaWeather}</button>
        <TodaysForecast />
      </header>
    </div>
  );
}

export default App;
