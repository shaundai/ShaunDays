import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import getWeather from './util/weatherApi';
import convertTimestampToTime from './util/utilities';
require('dotenv').config()


export default function App() {
  const [mariettaWeather, setMariettaWeather] = useState({})
  const [time, setTime] = useState('')

  const getSummary = async () => {
    try {
    const weather = (await getWeather()).data.currently
    setMariettaWeather(weather);
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }

  const getTime = (time) => {
    const newTime = convertTimestampToTime(mariettaWeather.time);
    return newTime;
  }




  return (
    <div className="App">
        <Shaun>Shaun <Days>Days</Days></Shaun>
        <h1>Weather App</h1>
        <h2>Marietta Weather</h2> 
        <h1>{mariettaWeather.summary}</h1>
        <img src={mariettaWeather.icon ? require(`../images/${mariettaWeather.icon}.png`) : require(`../images/default.png`)}></img>
        <button onClick={getSummary}>Get Today's Weather</button>
    </div>
  );
}

const Shaun = styled.h1`
  font-size: 2em;
  text-align: left;
  color: #317873;

`;

const Days = styled.span`
  text-align: center;
  font-family: Trebuchet MS, Helvetica, sans-serif;
  color: #4FBCC5;
`

const mainWeatherIcon = styled.img`
  height: 40em;
`