import React from 'react';
import styled from 'styled-components';


function FiveDay({list}) {

    const getDayOfWeek = (unix) => {
        const convertDayOfWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const divideBySeconds = unix / 86400
        const findDayAfterUnix = Math.floor(divideBySeconds + 3)
        const findDayOfWeekNumber = findDayAfterUnix % 7
        return convertDayOfWeek[findDayOfWeekNumber];
    }

    return (
        <div style={{width: '100%'}}>
        <h1 style={{marginTop: '1.5em', fontSize: '1.2em'}}>Five Day Forecast: Marietta</h1> 
        <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
        {list.slice(1,6).map(item => (
        <li key={item.time} style={{ width: '15%'}}>
        <div style={{backgroundColor: 'gray', borderRadius: 20, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontSize: '1rem', marginTop: 10, paddingTop: 0}}>{getDayOfWeek(item.time)}</h2> 
          <Highlow>{item.summary}</Highlow>
          {item.icon ? <img className="fiveDayWeatherIcon" src={require(`../images/${item.icon}.png`)} alt={item.icon}></img> : null}
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