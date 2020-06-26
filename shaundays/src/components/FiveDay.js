import React from 'react';
import styled from 'styled-components';
import {useChain, animated} from 'react-spring'


function FiveDay({list}) {

    const getDayOfWeek = (unix) => {
        const convertDayOfWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const divideBySeconds = unix / 86400
        const findDayAfterUnix = Math.floor(divideBySeconds + 3)
        const findDayOfWeekNumber = findDayAfterUnix % 7
        return convertDayOfWeek[findDayOfWeekNumber];
    }

    return (
        <div>
        <ul style={{listStyleType: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', margin: 0, padding: '0 1em', height: '100%'}}>
        {list.slice(1,6).map(item => (
        <li key={item.time}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: 0}}>
            <div style={{display: 'flex', justifyContent: 'flex-start', width: '35%'}}>
                <h2 style={{fontSize: '1rem', marginTop: 10, paddingTop: 0, float: 'left'}}>{getDayOfWeek(item.time)}</h2>
            </div>
          {item.icon ? <img className="fiveDayWeatherIcon" src={require(`../images/${item.icon}.png`)} alt={item.icon}></img> : null}
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{item.temperatureHigh ? <Highlow><b>High: </b>{Math.trunc(item.temperatureHigh)}°F</Highlow> : null}
          {item.temperatureLow ? <Highlow><b>Low: </b>{Math.trunc(item.temperatureLow)}°F</Highlow> : null}
          </div>
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