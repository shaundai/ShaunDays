import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import getWeather from './util/weatherApi';
import convertTimestampToTime from './util/utilities';
require('dotenv').config()


export default function App() {
  const [mariettaWeather, setMariettaWeather] = useState({})
  const [fiveDayForecast, setFiveDayForecast] = useState({})
  const [weatherButtonText, setWeatherButtonText] = useState('Get Weather')
  const [time, setTime] = useState('')

  const getSummary = async () => {
    try {
    const weather = (await getWeather()).data.currently
    setMariettaWeather(weather);
    setWeatherButtonText('5-Day Forecast');
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }

  const getFiveDay = async () => {
    try {
    const fiveDayWeather = (await getWeather()).data.daily
    setFiveDayForecast(fiveDayWeather);
    setWeatherButtonText('Get Todays Weather');
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }

  return (
    <div className="App">
        <h1 style={{fontSize: '2.5em', margin: 0, paddingBottom: 0}}><Shaun>Shaun</Shaun><Days>Days</Days></h1>
        <div style={{fontSize: '2em', marginTop: 0, marginBottom: '.5em', paddingTop: 0, color: '#317873'}}>Weather App</div>
        <div style={{backgroundColor: 'gray', borderRadius: 20, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontSize: '1.5em', marginTop: 10, paddingTop: 0}}>Marietta, GA</h2> 
          <div>{mariettaWeather.summary}</div>
          {mariettaWeather.icon ? <img className="mainWeatherIcon" src={require(`../images/${mariettaWeather.icon}.png`)}></img> : null}
          {mariettaWeather.temperature ? <div>{mariettaWeather.temperature} F</div> : null}
          <button onClick={getSummary}>{weatherButtonText}</button>
        </div>
    </div>
  );
}

const Shaun = styled.span`
  text-align: left;
`;

const Days = styled.span`
  text-align: center;
  text-decoration: underline;
  color: #317873;
`