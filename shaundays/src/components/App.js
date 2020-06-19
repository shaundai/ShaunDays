import React, { useState } from 'react';
import './App.css';
import TodaysForecast from './TodaysForecast'
import getWeather from './util/weatherApi';
require('dotenv').config()


function App() {
  const [mariettaWeather, setMariettaWeather] = useState('')

  const getSummary = () => {
    getWeather().then(response => {
      return(response.data.currently.summary)})
    setMariettaWeather(summary);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <h1>{mariettaWeather}</h1>
        <button onClick={getSummary}>{mariettaWeather}</button>
        <TodaysForecast />
      </header>
    </div>
  );
}

export default App;
