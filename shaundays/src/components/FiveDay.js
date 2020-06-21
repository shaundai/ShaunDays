import React from 'react'

function FiveDay({summary, icon, temperatureHigh}) {

    return (
        <div style={{backgroundColor: 'gray', borderRadius: 20, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontSize: '1.5rem', marginTop: 10, paddingTop: 0}}>Marietta, GA</h2> 
          <div>{summary}</div>
          {icon ? <img className="mainWeatherIcon" src={require(`../images/${icon}.png`)}></img> : null}
          {temperatureHigh ? <div>High: {temperatureHigh} F</div> : null}
        </div>
        )
    }

export default FiveDay;