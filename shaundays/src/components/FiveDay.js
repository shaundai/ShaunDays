import React from 'react'

function FiveDay({list}) {
    return (
    <ul>
        {list.map(item => (
        <li key={item.time}>
        <div style={{backgroundColor: 'gray', borderRadius: 20, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontSize: '1.5rem', marginTop: 10, paddingTop: 0}}>Marietta, GA</h2> 
          <div>{item.summary}</div>
          {item.icon ? <img className="mainWeatherIcon" src={require(`../images/${item.icon}.png`)}></img> : null}
          {item.temperatureHigh ? <div>High: {item.temperatureHigh} F</div> : null}
        </div>
        </li>
        ))}
    </ul>
    )
    }

export default FiveDay;