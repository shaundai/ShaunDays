import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import getWeather from './util/weatherApi';
import FiveDay from './FiveDay';
require('dotenv').config()


export default function App() {
  const [mariettaWeather, setMariettaWeather] = useState({})
  const [getFiveDayOn, setGetFiveDayOn] = useState(false)
  const [fiveDayForecast, setFiveDayForecast] = useState({})

  const getSummary = async () => {
    try {
    const weather = (await getWeather()).data.currently
    setMariettaWeather(weather);
    setGetFiveDayOn(true)
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }

  const getFiveDay = async () => {
    try {
    const fiveDayWeather = (await getWeather()).data.daily.data
    setFiveDayForecast(fiveDayWeather);
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }

  const showFiveDay = (forecast) => {
    const fiveDay = fiveDayForecast.map(item => {
      return <FiveDay summary={item.summary} icon={item.icon} temperature={item.temperatureHigh} />
    });
    return fiveDay;
  }

  return (
    <div className="App">
        <div style={{zIndex: 10, margin: 0, paddingBottom: 0}}>
          <h1 style={{fontSize: '2.5rem', margin: 0, paddingBottom: 0}}>
          <Shaun>Shaun</Shaun><Days>Days</Days>
        </h1>
        </div>
        <Grayrectangle/>

        <div style={{fontSize: '2rem', marginTop: -2, marginBottom: '1em', paddingTop: 0, color: '#317873'}}>Weather App</div>
        <div style={{backgroundColor: 'gray', borderRadius: 20, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontSize: '1.5rem', marginTop: 10, paddingTop: 0}}>Marietta, GA</h2> 
          <div>{mariettaWeather.summary}</div>
          {mariettaWeather.icon ? <img className="mainWeatherIcon" src={require(`../images/${mariettaWeather.icon}.png`)}></img> : null}
          {mariettaWeather.temperature ? <div>{mariettaWeather.temperature} F</div> : null}
          {getFiveDayOn ? <button onClick={getFiveDay}>Get Five Day Forecast</button> : <button onClick={getSummary}>Get Today's Weather</button>}
        </div>
        {getFiveDayOn ? <FiveDay weather={mariettaWeather} /> : null}
    </div>
  );
}

const Shaun = styled.span`
  text-align: left;
  z-index: -1;
`;

const Days = styled.span`
  text-align: center;
  text-decoration: underline;
  color: #317873;
`;

const Grayrectangle = styled.div`
  background-color: #F5F5F5;
  height: 1rem;
  width: 12rem;
  position: relative;
  bottom: .8rem;
  opacity: 0.5;
  margin-bottom: -2;
`