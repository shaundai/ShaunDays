import React, { useState } from 'react';
import './App.css';
import TodaysForecast from './TodaysForecast'
import WeatherApi from './util/weatherApi';

function App() {
  const [mariettaWeather, setMariettaWeather] = useState('')

  const handleOnClick = () => {
    // setMariettaWeather(WeatherApi.getWeather())
    WeatherApi.getWeather().then(response => {
      console.log(response.data.currently.summary)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <h1>{mariettaWeather}</h1>
        <button onClick={handleOnClick}>{mariettaWeather}</button>
        <TodaysForecast mariettaWeather={mariettaWeather} onClick={handleOnClick} />
      </header>
    </div>
  );
}

export default App;
