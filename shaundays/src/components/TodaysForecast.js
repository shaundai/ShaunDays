import React from 'react';

function TodaysForecast(handleOnClick){
        return (
            <button onClick={handleOnClick}>
                <h1>Click for today's weather</h1>
            </button>
        )
    }

export default TodaysForecast