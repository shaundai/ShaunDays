const axios = require('axios');

const WeatherApi = {

    getWeather() {
        return axios.get('https://api.darksky.net/forecast/678da8f7dbcf7a5d50a3533a310238d1/33.9526,-84.5499')
    },

    getSummary() {
        WeatherApi.getWeather().then(response => {
        return(response.data.currently.summary)
    })
    } 
}

export default WeatherApi;