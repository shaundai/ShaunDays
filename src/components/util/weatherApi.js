require("dotenv").config();

const axios = require('axios');

const getWeather = (lat, long) => {
        return axios.get(`https://cors-anywhere.herokuapp.com/http://shaundays-node.herokuapp.com/weather/${lat},${long}`)
}

export default getWeather;