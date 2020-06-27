import React, { useEffect, useState } from 'react';

import './App.css';
import styled from 'styled-components';
import getWeather from './util/weatherApi';
import getGeoData from './util/googleMapsApi';
import FiveDay from './FiveDay';
require('dotenv').config()

export default function App() {
  const [location, setLocation] = useState({city: '', state: ''})
  const [displayWeather, setDisplayWeather] = useState(false)
  const [mariettaWeather, setMariettaWeather] = useState({})
  const [fiveDayForecast, setFiveDayForecast] = useState({})

  //what happens when getlatlong fails? don't want weatherapi to call

  const getSummary = async () => {
    try {
      const _location = (await getGeoData(location.city, location.state)).data.results[0].geometry.location
      const weather = (await getWeather(_location.lat, _location.lng)).data.currently
      const fiveDayWeather = (await getWeather(_location.lat, _location.lng)).data.daily.data
      setMariettaWeather(weather);
      setFiveDayForecast(fiveDayWeather);
      setDisplayWeather(true)
    }
    catch(err){
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }

  return (
    <div className="App">
        <div style={{zIndex: 10, margin: 0, paddingBottom: 0}}>
          <h1 style={{fontSize: '2.5rem', margin: 0, paddingBottom: 0}}>
          <Shaun>Shaun</Shaun><Days>Days</Days>
        </h1>
        </div>
        <Grayrectangle />
        <div style={{fontSize: '2rem', marginTop: -2, marginBottom: '1em', paddingTop: 0, color: '#317873'}}>Weather App</div>
        
        <div style={{display: 'flex'}}>
          <div>
            <input style={{padding: '.4em .75em', borderRadius: '5em'}} type="text" value={location.city} onChange={e => {setLocation({...location, city: e.target.value})}}></input>
            <p>Enter city</p>
          </div>
          <div>
          <input type="text" value={location.state} onChange={e => {setLocation({...location, state: e.target.value})}}></input>
          <p>Enter State</p>
          </div>
          <button onClick={getSummary}>Get Weather</button>
        </div>

        {displayWeather ? <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
        <div style={{backgroundColor: 'gray', borderRadius: 20, padding: 15, alignItems: 'center', justifyContent: 'center'}} className="shadow">
          {mariettaWeather.time ? <h2 style={{fontSize: '1.5rem', marginTop: 10, paddingTop: 0, marginBottom: 0}}>{location.city}, {location.state}</h2> : <p style={{fontSize: '.8em', fontWeight: 700}}>Click below for today's weather</p>} 
          <div style={{marginTop: 0, marginBottom: '.8em'}}>{mariettaWeather.summary}</div>
          {mariettaWeather.icon ? <img className="mainWeatherIcon" src={require(`../images/${mariettaWeather.icon}.png`)} alt={mariettaWeather.icon} style={{margin: '0 auto'}}></img> : null}
          {mariettaWeather.temperature ? <div style={{marginTop: '.8em', paddingBottom: '.5em'}}>{Math.trunc(mariettaWeather.temperature)}°F</div> : null}
          <GetButtonAfter>Clear</GetButtonAfter>
        </div>
        {fiveDayForecast[0] ? <FiveDay list={fiveDayForecast} /> : null}
        </div> : null}
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

const GetButton = styled.button`
  border-radius: .5em;
  padding: 6px;
  background-color: lightgray;
  border: none;
`

const GetButtonAfter = styled.button`
border-radius: .5em;
padding: 6px;
background-color: lightgray;
border: none;
`