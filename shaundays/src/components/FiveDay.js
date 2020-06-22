import React from 'react';
import styled from 'styled-components';


function FiveDay({list}) {
    return (
        <div>
        <h1>Five Day Forecast: Marietta</h1> 
        <ul style={{listStyleType: 'none', display: 'flex', }}>
        {list.slice(0,5).map(item => (
        <li key={item.time}>
        <div style={{backgroundColor: 'gray', borderRadius: 20, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontSize: '1rem', marginTop: 10, paddingTop: 0}}>Marietta, GA</h2> 
          <Highlow>{item.summary}</Highlow>
          {item.icon ? <img className="mainWeatherIcon" src={require(`../images/${item.icon}.png`)} alt={item.icon}></img> : null}
          {item.temperatureHigh ? <Highlow><b>High: </b>{item.temperatureHigh} F</Highlow> : null}
          {item.temperatureLow ? <Highlow><b>Low: </b>{item.temperatureLow} F</Highlow> : null}
        </div>
        </li>
        ))}
    </ul>
    </div>
    )
    }

const Highlow = styled.div`
    font-size: .6em;
  `


export default FiveDay;