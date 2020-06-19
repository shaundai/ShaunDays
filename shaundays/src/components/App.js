import React, { useState } from 'react';
import './App.css';
import TodaysForecast from './TodaysForecast'
import getWeather from './util/weatherApi';
const axios = require('axios');
import convertTimestampToTime from './util/utilities';
require('dotenv').config()


function App() {
  const [mariettaWeather, setMariettaWeather] = useState({})

  const getSummary = async () => {
    try {
    const weather = (await getWeather()).data.currently
    setMariettaWeather(weather)
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }

  const getTime = (time) => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <h2>Marietta Weather</h2> 
        <h1>{mariettaWeather.time}</h1>
        <button onClick={getSummary}>Get Weather</button>
        <TodaysForecast />
      </header>
    </div>
  );
}

export default App;
