const axios = require('axios');

const WeatherApi = {

    getWeather() {
        return axios.get('https://api.darksky.net/forecast/678da8f7dbcf7a5d50a3533a310238d1/33.9526,-84.5499')
    },

    getSummary() {
        WeatherApi.getWeather().then(response => {
        console.log(response.data.currently.summary)
    })
    } 
}

WeatherApi.getSummary()

//export default WeatherApi;